/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  // For GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
}

module.exports = nextConfig
