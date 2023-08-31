/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_TOKEN: process.env.NEXT_PUBLIC_SUPABASE_TOKEN,
  },
};

module.exports = nextConfig;
