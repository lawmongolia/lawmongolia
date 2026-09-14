import Image from 'next/image';
import { CLIENTS, type Client } from '@/content/clients';
import type { Lang } from '@/lib/types';

function Mark({ client, lang }: { client: Client; lang: Lang }) {
  const inner = client.logo ? (
    <Image
      src={client.logo}
      alt={client.alt?.[lang] ?? client.name}
      width={160}
      height={48}
      className="h-8 w-auto max-w-[140px] object-contain opacity-60 grayscale transition-opacity duration-200 group-hover:opacity-100"
    />
  ) : (
    <span className="font-serif text-[1.0625rem] text-muted transition-colors duration-200 group-hover:text-[var(--accent)]">
      {client.name}
    </span>
  );

  if (client.url) {
    return (
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full items-center no-underline"
      >
        {inner}
      </a>
    );
  }

  return <span className="group flex h-full items-center">{inner}</span>;
}

/**
 * Presents the companies the firm has advised. Laid out on a hairline grid
 * rather than in cards, and set in grey so the section reads as a record of
 * work rather than as advertising.
 */
export function ClientWall({ lang }: { lang: Lang }) {
  return (
    <ul className="grid grid-cols-2 border-l border-t border-rule sm:grid-cols-3 lg:grid-cols-5">
      {CLIENTS.map((client) => (
        <li
          key={client.name}
          className="flex min-h-[88px] items-center border-b border-r border-rule px-5 py-6"
        >
          <Mark client={client} lang={lang} />
        </li>
      ))}
    </ul>
  );
}
