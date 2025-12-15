import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "local-origin.dev",
    "*.local-origin.dev",
    "128.226.206.249",
  ],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/chan",
        permanent: false,
      },
    ];
  },
  serverExternalPackages: ["@copilotkit/runtime"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Exclude problematic files from being processed
      config.externals = config.externals || [];
      config.externals.push({
        "thread-stream": "commonjs thread-stream",
        pino: "commonjs pino",
        "pino-pretty": "commonjs pino-pretty",
      });
    }
    
    // Ignore test files
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /node_modules[\\/]thread-stream[\\/](test|bench\.js|LICENSE|README\.md)/,
      use: "null-loader",
    });

    return config;
  },
};

export default nextConfig;
