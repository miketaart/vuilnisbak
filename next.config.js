/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  extends: [
    "@commitlint/config-conventional"
],
}

module.exports = nextConfig
