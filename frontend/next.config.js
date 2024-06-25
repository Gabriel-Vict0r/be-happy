/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TOKEN_MAP: process.env.TOKEN_MAP,
    KEY_IP_GEOLOCATION_API: process.env.KEY_IP_GEOLOCATION_API,
    URL_ORPHANAGE: process.env.URL_ORPHANAGE,
    URL_POSITION: process.env.URL_POSITION,
    URL_PICTURES: process.env.URL_PICTURES,
    URL_HOUR: process.env.URL_HOUR,
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
