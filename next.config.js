/*
 * @Author: km2021
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2022-06-22 13:55:57
 * @Description:
 * @FilePath: /web-zyh/next.config.js
 *
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
