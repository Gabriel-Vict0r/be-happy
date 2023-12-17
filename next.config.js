/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      TOKEN_MAP: process.env.TOKEN_MAP,
    },
};

module.exports = nextConfig;