/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TOKEN_MAP: process.env.TOKEN_MAP,
    KEY_IP_GEOLOCATION_API: process.env.KEY_IP_GEOLOCATION_API,
    URL_API: process.env.URL_API,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "behappybucket.s3.amazonaws.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:slug*",
  //       destination: "<http://localhost:8080/:slug*>",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
