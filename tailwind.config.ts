import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        warm: '#FAF9F7',
        rule: '#E4E2DD',
        ink: '#1A1A1A',
        muted: '#6B6862',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { shell: '1240px', prose: '68ch' },
      letterSpacing: { tightest: '-0.03em' },
    },
  },
  plugins: [],
};
export default config;
