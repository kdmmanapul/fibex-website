import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "build",
  output: "export", // Added 'output' field to export
  /* config options here */
};

export default nextConfig;
