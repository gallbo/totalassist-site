/**
 * Genera el set de iconos del marketing site recortando el escudo del logo
 * full (914x219, mayor resolución) en lugar del shield PNG bajo res.
 *
 * Outputs:
 *   src/app/icon.png             512x512   favicon (shield centrado sobre navy con esquinas redondas, "safe-zone" PWA)
 *   src/app/apple-icon.png       180x180   apple-touch-icon (navy)
 *   public/icon-192.png          192x192   Android Chrome
 *   public/icon-512.png          512x512   Android Chrome HiDPI / PWA splash
 *   public/icon-512-maskable.png 512x512   PWA maskable (con safe zone)
 *   public/brand/og-image-v3.png    1200x630  Open Graph
 *
 * Borra public/favicon.ico al final para que el icon.png sea la única fuente.
 */
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SHIELD_STANDALONE = path.join(ROOT, "public/brand/totalassist-shield.png");

const NAVY = { r: 15, g: 31, b: 60, alpha: 1 };
const NAVY_HEX = "#0F1F3C";
const YELLOW = "#F5C800";

/**
 * Extrae solo el shield del logo full, recortando con padding mínimo via trim.
 * El logo full es 914x219; el shield está a la izquierda. Hacemos un crop ancho
 * y luego trim al alpha bounding box.
 */
async function extractShield() {
  // Usamos el shield standalone que tiene la forma correcta de escudo
  // (negro macizo + curva amarilla). El shield del logo full tiene un diseño
  // distinto (contorno con hueco interior) y no se ve igual al icono que el
  // equipo identifica como marca.
  return sharp(SHIELD_STANDALONE).png().toBuffer();
}

/**
 * Genera un icono cuadrado con el shield centrado sobre fondo transparente.
 * El browser/OS decide qué fondo usar según el contexto (tab claro/oscuro,
 * home screen, etc.). Sin fondo navy hardcoded.
 */
async function squareIconTransparent(size, padding = 0.08) {
  const inner = Math.round(size * (1 - padding * 2));
  const shieldBuffer = await extractShield();
  const shield = await sharp(shieldBuffer)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: "lanczos3",
    })
    .toBuffer();

  return sharp({
    create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: shield, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/**
 * Maskable icon: shield más pequeño (60% del canvas) sobre fondo navy plano sin
 * esquinas redondeadas. PWA en Android lo recorta a círculo/squircle como prefiera
 * el launcher; la safe-zone garantiza que el shield no quede cortado.
 */
async function maskableIcon(size) {
  const inner = Math.round(size * 0.55); // safe-zone PWA spec
  const shieldBuffer = await extractShield();
  const shield = await sharp(shieldBuffer)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: "lanczos3",
    })
    .toBuffer();

  return sharp({
    create: { width: size, height: size, channels: 4, background: NAVY },
  })
    .composite([{ input: shield, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function ogImage() {
  const W = 1200;
  const H = 630;
  // Shield más pequeño y centrado vertical para que WhatsApp / FB / LinkedIn
  // puedan recortar al cuadrado sin tocarlo. Padding ~150px arriba y abajo
  // (cualquier recorte agresivo de plataformas mobile sobrevive).
  const shieldH = 190;
  const shieldTop = 105;
  const shieldBuffer = await extractShield();

  const shieldMeta = await sharp(shieldBuffer).metadata();
  const aspectRatio = (shieldMeta.width || 1) / (shieldMeta.height || 1);
  const shieldW = Math.round(shieldH * aspectRatio);

  const shield = await sharp(shieldBuffer)
    .resize(shieldW, shieldH, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: "lanczos3",
    })
    .toBuffer();

  // Fondo cream plano (sin gradient ni acentos en los bordes — minimalismo
  // para que el contenido central nunca compita con cosas en los márgenes).
  const CREAM_HEX = "#FAF7EF";
  const NAVY_TEXT = "#0F1F3C";
  const svg = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
      <rect width="${W}" height="${H}" fill="${CREAM_HEX}"/>
      <text x="${W / 2}" y="395" font-family="-apple-system, BlinkMacSystemFont, Inter, Arial, sans-serif"
            font-size="72" font-weight="700" fill="${NAVY_TEXT}" text-anchor="middle">Total Assist</text>
      <text x="${W / 2}" y="455" font-family="-apple-system, BlinkMacSystemFont, Inter, Arial, sans-serif"
            font-size="28" font-weight="400" fill="${NAVY_TEXT}" opacity="0.65" text-anchor="middle">
        Aliado estrat&#233;gico en gesti&#243;n de siniestros
      </text>
      <rect x="${W / 2 - 50}" y="495" width="100" height="4" fill="${YELLOW}"/>
    </svg>
  `);

  return sharp({ create: { width: W, height: H, channels: 4, background: { r: 250, g: 247, b: 239, alpha: 1 } } })
    .composite([
      { input: svg, gravity: "northwest" },
      { input: shield, top: shieldTop, left: Math.floor((W - shieldW) / 2) },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function main() {
  console.log("Extrayendo shield del logo full...");
  const shieldExtracted = await extractShield();
  const meta = await sharp(shieldExtracted).metadata();
  console.log(`Shield extraído: ${meta.width}x${meta.height}px`);

  console.log("Generando icon.png (512x512, transparente)...");
  await fs.writeFile(path.join(ROOT, "src/app/icon.png"), await squareIconTransparent(512));

  console.log("Generando apple-icon.png (180x180, transparente)...");
  await fs.writeFile(path.join(ROOT, "src/app/apple-icon.png"), await squareIconTransparent(180));

  console.log("Generando public/icon-192.png (transparente)...");
  await fs.writeFile(path.join(ROOT, "public/icon-192.png"), await squareIconTransparent(192));

  console.log("Generando public/icon-512.png (transparente)...");
  await fs.writeFile(path.join(ROOT, "public/icon-512.png"), await squareIconTransparent(512));

  console.log("Generando public/icon-512-maskable.png (PWA maskable con fondo navy + safe zone)...");
  await fs.writeFile(path.join(ROOT, "public/icon-512-maskable.png"), await maskableIcon(512));

  console.log("Generando public/brand/og-image-v3.png (1200x630)...");
  await fs.writeFile(path.join(ROOT, "public/brand/og-image-v3.png"), await ogImage());

  console.log("Borrando public/favicon.ico (si existe)...");
  try {
    await fs.unlink(path.join(ROOT, "public/favicon.ico"));
  } catch {
    // ignore
  }
  console.log("Hecho.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
