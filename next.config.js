/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]", // Customize file output location
      },
    });
    return config;
  },
};

module.exports = nextConfig;