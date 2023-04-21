/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_TOKEN: process.env.SUPABASE_TOKEN,
  },
};

module.exports = nextConfig;
