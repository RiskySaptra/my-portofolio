/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  env: {
    HYGRAPH_ENDPOINT: process.env.HYGRAPH_ENDPOINT,
    HYGRAPH_TOKEN: process.env.HYGRAPH_TOKEN,
  },
};

module.exports = nextConfig;
