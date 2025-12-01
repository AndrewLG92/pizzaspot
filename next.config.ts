import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://cwigkrmgtrehmfpfnrds.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/Pizzas/**',
      },
      {
        protocol: 'https',
        hostname: 'https://cwigkrmgtrehmfpfnrds.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/beverages/**',
      },
    ],
  }
};

export default nextConfig;
