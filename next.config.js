/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // é para ser true, tem que corrigir a lib de mapas
  compiler: {
    styledComponents: true,
    env: {
      GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY,
    }
  },
}

module.exports = nextConfig
