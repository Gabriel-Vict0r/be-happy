/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TOKEN_MAP: process.env.TOKEN_MAP,
    KEY_IP_GEOLOCATION_API: process.env.KEY_IP_GEOLOCATION_API,
  },
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: "<http://localhost:8080/:slug*>",
      },
    ];
  },
};

module.exports = nextConfig;
