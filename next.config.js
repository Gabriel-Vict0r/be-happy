/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TOKEN_MAP: process.env.TOKEN_MAP,
    KEY_IP_GEOLOCATION_API: process.env.KEY_IP_GEOLOCATION_API,
  },
};

module.exports = nextConfig;
