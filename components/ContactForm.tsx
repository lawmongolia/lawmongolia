'use client';

import { useState } from 'react';
import { T } from '@/content/dictionary';
import type { Lang } from '@/lib/types';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const EMPTY = {
  name: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  /** Honeypot. Real people leave this empty. */
  website: '',
};

export function ContactForm({ lang }: { lang: Lang }) {
  const t = T.contact.form;
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState<Status>('idle');
  const [note, setNote] = useState('');

  function update(key: keyof typeof EMPTY, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function submit() {
    if (!values.name || !values.email || !values.subject || !values.message) {
      setStatus('error');
      setNote(t.required[lang]);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setStatus('error');
      setNote(t.invalidEmail[lang]);
      return;
    }

    setStatus('sending');
    setNote('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, lang }),
      });

      if (!res.ok) throw new Error(String(res.status));

      setStatus('sent');
      setNote(t.sent[lang]);
      setValues(EMPTY);
    } catch {
      setStatus('error');
      setNote(t.error[lang]);
    }
  }

  const fields = [
    { key: 'name', label: t.name[lang], type: 'text', autoComplete: 'name', required: true },
    { key: 'company', label: t.company[lang], type: 'text', autoComplete: 'organization', required: false },
    { key: 'email', label: t.email[lang], type: 'email', autoComplete: 'email', required: true },
    { key: 'phone', label: t.phone[lang], type: 'tel', autoComplete: 'tel', required: false },
  ] as const;

  return (
    <div className="max-w-2xl">
      <div className="grid gap-8 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="field-label" htmlFor={`f-${f.key}`}>
              {f.label}
            </label>
            <input
              id={`f-${f.key}`}
              className="field-input"
              type={f.type}
              autoComplete={f.autoComplete}
              required={f.required}
              value={values[f.key]}
              onChange={(e) => update(f.key, e.target.value)}
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="f-subject">
            {t.subject[lang]}
          </label>
          <input
            id="f-subject"
            className="field-input"
            type="text"
            required
            value={values.subject}
            onChange={(e) => update('subject', e.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="f-message">
            {t.message[lang]}
          </label>
          <textarea
            id="f-message"
            className="field-input"
            required
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
          />
        </div>

        {/* Honeypot, hidden from people and from assistive technology. */}
        <div className="hidden" aria-hidden>
          <label htmlFor="f-website">Website</label>
          <input
            id="f-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => update('website', e.target.value)}
          />
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button
          type="button"
          onClick={submit}
          disabled={status === 'sending'}
          className="action action-accent font-sans disabled:opacity-50"
        >
          {status === 'sending' ? t.sending[lang] : t.send[lang]}
        </button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`mt-6 min-h-6 font-sans text-[0.875rem] ${
          status === 'error' ? 'text-ink' : 'text-muted'
        }`}
      >
        {note}
      </p>

      <p className="mt-8 max-w-prose border-t border-rule pt-6 font-sans text-[0.8125rem] leading-relaxed text-muted">
        {T.contact.disclaimer[lang]}
      </p>
    </div>
  );
}
