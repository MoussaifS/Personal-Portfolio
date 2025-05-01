/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
}

export default nextConfig
