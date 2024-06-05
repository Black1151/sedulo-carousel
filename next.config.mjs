/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        ignored: /node_modules/,
        poll: 1000,
      }
    }
    return config
  },
}

export default nextConfig
