/**
 * Otimização de imagens — Real Center
 * -----------------------------------
 * - Faz backup dos originais em /_originais (fora de /public, não vai pro site)
 * - Redimensiona para tamanhos adequados ao uso real
 * - Converte para WebP (mantém transparência dos logos)
 * - Remove o arquivo original de /public (a versão .webp assume o lugar)
 *
 * Uso:  node scripts/optimize-images.mjs
 * Requer: sharp (devDependency)
 */
import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const BACKUP = path.join(ROOT, "_originais");

const ensureDir = (d) => fs.mkdir(d, { recursive: true });
const kb = (n) => (n / 1024).toFixed(0) + " KB";

async function optimize(relFile, { width, height, quality }) {
  const abs = path.join(PUBLIC, relFile);
  const ext = path.extname(abs);
  if (ext.toLowerCase() === ".webp") return; // já otimizado

  // pula se o arquivo já foi otimizado/removido em uma execução anterior
  try {
    await fs.access(abs);
  } catch {
    return;
  }

  // 1. backup do original (não sobrescreve backup existente)
  const backupPath = path.join(BACKUP, relFile);
  await ensureDir(path.dirname(backupPath));
  try {
    await fs.access(backupPath);
  } catch {
    await fs.copyFile(abs, backupPath);
  }

  // 2. gera webp (lê para buffer antes, p/ liberar o handle do arquivo no Windows)
  const outPath = abs.slice(0, -ext.length) + ".webp";
  const before = (await fs.stat(abs)).size;
  const inputBuffer = await fs.readFile(abs);
  await sharp(inputBuffer)
    .resize({
      width: width || undefined,
      height: height || undefined,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality })
    .toFile(outPath);
  const after = (await fs.stat(outPath)).size;

  // 3. remove o original de /public
  await fs.unlink(abs);

  const rel = relFile.replace(/\\/g, "/");
  console.log(`✓ ${rel}\n    ${kb(before)} → ${kb(after)}  →  ${path.basename(outPath)}`);
}

async function main() {
  const jobs = [
    { file: "assets/img/logo.png", height: 200, quality: 92 },
    { file: "assets/img/Header/area.png", width: 1400, quality: 78 },
  ];

  // Pastas escaneadas automaticamente: { pasta, largura, altura, qualidade }
  const folders = [
    { rel: "assets/img/Marcas", width: 480, height: 220, quality: 85 },
    { rel: "assets/img/Produtos", width: 900, height: 700, quality: 78 },
    { rel: "assets/img/Estrutura", width: 1000, height: 800, quality: 78 },
    { rel: "assets/img/Showroom", width: 1400, height: 900, quality: 78 },
  ];
  for (const fo of folders) {
    const dir = path.join(PUBLIC, fo.rel);
    let files = [];
    try {
      files = await fs.readdir(dir);
    } catch {
      continue;
    }
    for (const f of files) {
      if (/\.(png|jpe?g)$/i.test(f)) {
        jobs.push({ file: path.join(fo.rel, f), width: fo.width, height: fo.height, quality: fo.quality });
      }
    }
  }

  console.log(`Otimizando ${jobs.length} imagens...\n`);
  for (const j of jobs) {
    await optimize(j.file, j);
  }
  console.log(`\nConcluído. Backups em: ${path.relative(ROOT, BACKUP)}/`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
