/**
 * Cloudflare Worker for lawmongolia.mn
 *
 * Two jobs:
 *   1. POST /api/contact  — validate an enquiry and forward it on.
 *   2. everything else    — fall through to the statically exported site.
 *                           Cloudflare serves matching files directly without
 *                           invoking this Worker at all.
 *
 * There is no database. An enquiry is held in memory only for the moment it
 * takes to forward it, and is never written to storage by this Worker.
 */

interface Env {
  /** Static Assets binding, configured in wrangler.jsonc. */
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  /** Any endpoint that accepts a JSON POST. Set with `wrangler secret put`. */
  CONTACT_FORM_WEBHOOK?: string;
  /** Optional bearer token for that endpoint. */
  CONTACT_FORM_TOKEN?: string;
}

/**
 * Soft rate limit. A Worker isolate is short-lived and there are many of them,
 * so this stops a single burst rather than a determined attacker. The durable
 * control is a Cloudflare rate limiting rule on /api/contact — see the README.
 */
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

/** Strip control characters and cap length. */
function clean(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  let out = '';
  for (const char of value) {
    const code = char.codePointAt(0) ?? 0;
    out += code < 0x20 || code === 0x7f ? ' ' : char;
  }
  return out.trim().slice(0, max);
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ error: 'method_not_allowed' }, 405);
  }

  const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
  if (rateLimited(ip)) return json({ error: 'rate_limited' }, 429);

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }

  // Honeypot: accept and discard without telling the sender.
  if (clean(payload.website, 200)) return json({ ok: true }, 200);

  const enquiry = {
    name: clean(payload.name, 120),
    company: clean(payload.company, 160),
    email: clean(payload.email, 160),
    phone: clean(payload.phone, 60),
    subject: clean(payload.subject, 200),
    message: clean(payload.message, 5000),
    lang: payload.lang === 'mn' ? 'mn' : 'en',
    receivedAt: new Date().toISOString(),
  };

  if (!enquiry.name || !enquiry.email || !enquiry.subject || !enquiry.message) {
    return json({ error: 'missing_fields' }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    return json({ error: 'invalid_email' }, 400);
  }

  if (!env.CONTACT_FORM_WEBHOOK) {
    return json({ error: 'not_configured' }, 503);
  }

  try {
    const upstream = await fetch(env.CONTACT_FORM_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(env.CONTACT_FORM_TOKEN
          ? { Authorization: `Bearer ${env.CONTACT_FORM_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(enquiry),
    });
    if (!upstream.ok) throw new Error(`upstream ${upstream.status}`);
  } catch {
    return json({ error: 'delivery_failed' }, 502);
  }

  return json({ ok: true }, 200);
}

const handler = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      return handleContact(request, env);
    }

    // Static assets are served before this Worker runs, so this line is
    // reached only for paths with no matching file. Response headers for
    // pages are set in public/_headers.
    return env.ASSETS.fetch(request);
  },
};

export default handler;
