import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    output: 'export', // Ensure static export
    trailingSlash: true, // Optional: Avoid 404s for subpages
    images: {
        unoptimized: true, // Ensures images work with static export
    },

};

export default nextConfig;
