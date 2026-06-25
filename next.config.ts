import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local placeholder art is SVG; safe here since all SVGs are authored by us
    // (no remote/user-uploaded SVGs are ever rendered through next/image).
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
};

export default nextConfig;
