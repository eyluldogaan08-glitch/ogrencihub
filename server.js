/**
 * server.js — ÖğrenciHub Custom Next.js Server
 *
 * Kullanım:
 *   node server.js          → production
 *   NODE_ENV=development node server.js  → development
 */

// ─── .env Yükle (en üstte olmalı) ────────────────────────────────────────────
import dotenv from "dotenv";
dotenv.config();

import { createServer } from "http";
import { parse } from "url";
import next from "next";
import path from "path";
import fs from "fs";
import { Pool } from "pg";
import { fileURLToPath } from "url";

// ─── ESM'de __dirname Tanımla ─────────────────────────────────────────────────
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── Ortam Değişkenleri ───────────────────────────────────────────────────────

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT || "5800", 10);
const hostname = process.env.HOSTNAME || "0.0.0.0";

// Zorunlu env değişkenlerini kontrol et
const requiredEnvVars = [
  "DATABASE_URL",
  "JWT_SECRET",
  "ADMIN_USERNAME",
  "ADMIN_PASSWORD",
];

const missingVars = requiredEnvVars.filter((v) => !process.env[v]);
if (missingVars.length > 0) {
  console.error(
    `\n❌  Eksik ortam değişkenleri: ${missingVars.join(", ")}\n` +
      `    Lütfen .env dosyanı kontrol et.\n`,
  );
  process.exit(1);
}

// ─── PostgreSQL Bağlantısını Test Et ─────────────────────────────────────────

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function testDbConnection() {
  try {
    const client = await pool.connect();
    await client.query("SELECT 1");
    client.release();
    console.log("✅  Veritabanı bağlantısı başarılı.");
  } catch (err) {
    console.error("❌  Veritabanına bağlanılamadı:", err.message);
    console.error(
      "    DATABASE_URL:",
      process.env.DATABASE_URL?.replace(/:([^:@]+)@/, ":***@"),
    );
    process.exit(1);
  }
}

// ─── Upload Klasörünü Hazırla ─────────────────────────────────────────────────

const uploadDir = path.join(process.cwd(), "public", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`📁  Upload klasörü oluşturuldu: ${uploadDir}`);
}

// ─── MIME Tipleri ─────────────────────────────────────────────────────────────

const mimeTypes = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".zip": "application/zip",
  ".rar": "application/x-rar-compressed",
  ".mp4": "video/mp4",
  ".mp3": "audio/mpeg",
};

// ─── Ana Fonksiyon ────────────────────────────────────────────────────────────

async function main() {
  await testDbConnection();

  const app = next({ dev, hostname, port });
  const handle = app.getRequestHandler();

  await app.prepare();

  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      // ── /uploads/ → statik dosya sun ──────────────────────────────────────
      if (pathname.startsWith("/uploads/")) {
        const fileName = decodeURIComponent(pathname.replace("/uploads/", ""));

        // Path traversal saldırısına karşı koruma
        const filePath = path.resolve(uploadDir, fileName);
        if (!filePath.startsWith(uploadDir)) {
          res.writeHead(403);
          res.end("Yasak");
          return;
        }

        if (fs.existsSync(filePath)) {
          const ext = path.extname(fileName).toLowerCase();
          const contentType = mimeTypes[ext] || "application/octet-stream";

          res.setHeader("Content-Type", contentType);
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          res.setHeader("Content-Length", fs.statSync(filePath).size);

          fs.createReadStream(filePath).pipe(res);
          return;
        } else {
          res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
          res.end("Dosya bulunamadı");
          return;
        }
      }

      // ── Diğer tüm istekler → Next.js'e ilet ───────────────────────────────
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("❌  İstek hatası:", err);
      res.statusCode = 500;
      res.end("Sunucu hatası");
    }
  });

  // ── Graceful Shutdown ──────────────────────────────────────────────────────
  const shutdown = async (signal) => {
    console.log(`\n🛑  ${signal} alındı, sunucu kapatılıyor...`);
    server.close(async () => {
      await pool.end();
      console.log("✅  Sunucu ve DB bağlantısı düzgün kapatıldı.");
      process.exit(0);
    });
    setTimeout(() => {
      console.error("⚠️   Zorla kapatılıyor...");
      process.exit(1);
    }, 10_000);
  };

  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));

  process.on("uncaughtException", (err) => {
    console.error("🔥  Yakalanmamış hata:", err);
  });
  process.on("unhandledRejection", (reason) => {
    console.error("🔥  İşlenmeyen promise:", reason);
  });

  // ── Dinlemeye Başla ────────────────────────────────────────────────────────
  server.listen(port, hostname, () => {
    const mode = dev ? "development 🔧" : "production 🚀";
    console.log(`
┌─────────────────────────────────────────────┐
│          ÖğrenciHub Sunucusu                │
├─────────────────────────────────────────────┤
│  Adres  → http://localhost:${port}              │
│  Mod    → ${mode.padEnd(33)}│
│  Upload → /public/uploads/                  │
│  DB     → altinolukmyo@localhost:5432        │
└─────────────────────────────────────────────┘
`);
  });
}

main();
