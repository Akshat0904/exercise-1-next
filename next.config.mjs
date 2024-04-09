/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: "default",
    // path: "/",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "resi.uatz.view.com.au",
      },
    ],
  },
};

export default nextConfig;
