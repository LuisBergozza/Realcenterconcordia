/** @type {import('next').NextConfig} */

// Para publicar em GitHub Pages num repositório de projeto
// (ex.: usuario.github.io/real-center) defina a variável de ambiente
// antes do build:  BASE_PATH=/real-center npm run build
// Em domínio próprio ou usuario.github.io, deixe vazio.
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  // Gera HTML estático em /out — compatível com GitHub Pages / hospedagem simples.
  output: 'export',

  // GitHub Pages serve cada página como /pasta/index.html.
  trailingSlash: true,

  // O otimizador de imagens do Next exige servidor; em export estático usamos
  // as imagens como estão (já entregamos otimizadas manualmente).
  images: { unoptimized: true },

  basePath: basePath,
  assetPrefix: basePath || undefined,

  // Expõe o basePath ao código (ex.: prefixar caminhos de imagens se necessário).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
