/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    "pino",
    "pino-pretty",
    "thread-stream",
    "sonic-boom",
    "@copilotkit/runtime",
  ],
  redirects: async () => [
    {
      source: "/",
      destination: "/chan",
      permanent: false,
    },
  ],
};

export default nextConfig;