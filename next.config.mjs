/** @type {import('next').NextConfig} */
const nextConfig = {
  //config image when use Image component
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    NEXT_APIURL: "http://110.74.194.123:8989",
  },
};

export default nextConfig;
