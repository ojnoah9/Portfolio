/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.skillicons.dev",
        port: "",
        pathname: "/icons",
      },
      // Add more patterns if needed
    ],
  },
};

module.exports = nextConfig;
