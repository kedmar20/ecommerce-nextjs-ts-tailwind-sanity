/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      domains: ["cdn.sanity.io", "wikipedia.org", "rb.gy"],
      remotePatterns: [
         {
            protocol: "https",
            hostname: "**",
         },
         {
            protocol: "http",
            hostname: "**",
         },
      ],
   },
};

module.exports = nextConfig;
