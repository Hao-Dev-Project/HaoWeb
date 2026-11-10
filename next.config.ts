import type { NextConfig } from "next";

const securityHeaders = [
  // Don't let other sites embed this site in a frame (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
  // Don't let browsers guess file types
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Only send the bare domain when visitors follow a link to another site
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // This site doesn't need camera, microphone or location
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
