import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    // output: 'export', // Ensure static export
    trailingSlash: true, // Optional: Avoid 404s for subpages
    images: {
        unoptimized: true, // Ensures images work with static export
    },
    env: {
        EMAIL_HOST: process.env.EMAIL_HOST,
        EMAIL_PORT: process.env.EMAIL_PORT,
        EMAIL_SECURE: process.env.EMAIL_SECURE,
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS,
        EMAIL_RECEIVER: process.env.EMAIL_RECEIVER,
    },
};

export default nextConfig;
