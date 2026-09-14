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
  images: {
    /**
     * Required for static export: there is no image optimisation server.
     * Supply correctly sized files in /public instead — see the README.
     */
    unoptimized: true,
  },
};

export default nextConfig;
