import Image from 'next/image';
import type { Person } from '@/content/people';
import { T } from '@/content/dictionary';
import type { Lang } from '@/lib/types';

/**
 * Renders the lawyer's portrait. Until a file is supplied it draws a
 * proportioned frame in the page's own palette rather than a stock photograph.
 */
export function Portrait({
  person,
  lang,
  priority = false,
  sizes = '(max-width: 640px) 60vw, 22vw',
}: {
  person: Person;
  lang: Lang;
  priority?: boolean;
  sizes?: string;
}) {
  if (person.portrait) {
    return (
      <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden bg-warm">
        <Image
          src={person.portrait}
          alt={person.portraitAlt[lang]}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="flex aspect-[4/5] w-full max-w-[320px] items-end border border-current/20 p-4"
      role="img"
      aria-label={T.people.photoPending[lang]}
    >
      <span className="font-sans text-[0.75rem] opacity-60">
        {T.people.photoPending[lang]}
      </span>
    </div>
  );
}
