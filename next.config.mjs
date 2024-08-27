/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.skillicons.dev",
        port: "",
        pathname: "/icons/**", // Adjust this if your path is different
      },
    ],
  },
};

module.exports = nextConfig;
