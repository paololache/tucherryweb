/** @type {import('next').NextConfig} */
const isStatic = process.env.STATIC_EXPORT === "1";
const nextConfig = {
  ...(isStatic ? { output: "export", assetPrefix: "./", trailingSlash: true } : {}),
  images: { unoptimized: true },
};
export default nextConfig;
