/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Static export. The build writes plain HTML, CSS and JS to ./out, which is
   * served directly by Cloudflare Workers Static Assets. No Node server, no
   * adapter between Next.js and the host.
   */
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    /**
     * Linting runs as its own command (`npm run lint`), not as part of the
     * build. A missing or unreadable ESLint config must not be able to stop a
     * deployment — the build either compiles or it does not.
     */
    ignoreDuringBuilds: true,
  },
  images: {
    /**
     * Required for static export: there is no image optimisation server.
     * Supply correctly sized files in /public instead — see the README.
     */
    unoptimized: true,
  },
};

export default nextConfig;
