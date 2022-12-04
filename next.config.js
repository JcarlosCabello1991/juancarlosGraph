/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env:{
    URL_API:process.env.URL_API,
    API_ID:process.env.API_ID,
    API_KEY:process.env.API_KEY,
    Region:process.env.Region,
  }
}

module.exports = nextConfig
