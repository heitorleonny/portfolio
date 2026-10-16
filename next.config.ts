import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/treinamentos/csat/material",
        destination: "/treinamentos/csat/materiais",
        permanent: true,
      },
      {
        source: "/treinamentos/csat/material/html",
        destination: "/treinamentos/csat/materiais/html",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/treinamentos/csat/materiais/html",
        destination: "/treinamentos/csat/materiais/mare-de-volta.html",
      },
    ];
  },
};
export default nextConfig;
