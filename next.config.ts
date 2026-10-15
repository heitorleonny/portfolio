import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Treinamento de CSAT (EPEEJ '26): apresentação em HTML servida de /public
      { source: "/treinamentos/csat/materiais/html", destination: "/treinamentos/csat/materiais/mare-de-volta.html" },
      { source: "/treinamentos/csat/materiais", destination: "/treinamentos/csat/materiais/mare-de-volta.html" },
    ];
  },
};

export default nextConfig;
