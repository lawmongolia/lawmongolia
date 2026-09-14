import Image from 'next/image';
import { BRAND, LOGO_SRC, LOGO_HEIGHT } from '@/lib/site';

type Variant = 'lockup' | 'wordmark';

/**
 * `lockup` renders the supplied logo file. It is a navy-and-gold mark on a
 * transparent background, so it belongs on white surfaces.
 *
 * `wordmark` is the typographic secondary lockup, used on the deep colour
 * where the navy mark would disappear. Replace it with a supplied knockout
 * (single-colour white) version of the logo when one is available.
 */
export function Logo({
  variant = 'lockup',
  className = '',
}: {
  variant?: Variant;
  className?: string;
}) {
  if (variant === 'lockup' && LOGO_SRC) {
    return (
      <Image
        src={LOGO_SRC}
        alt={BRAND.name}
        height={LOGO_HEIGHT}
        width={Math.round(LOGO_HEIGHT * 1.025)}
        priority
        style={{ height: LOGO_HEIGHT, width: 'auto' }}
        className={className}
      />
    );
  }

  return (
    <span
      className={`font-serif text-[1.35rem] leading-none tracking-[-0.02em] ${className}`}
    >
      Law<span style={{ color: 'var(--logo-accent)' }}>Mongolia</span>
    </span>
  );
}
