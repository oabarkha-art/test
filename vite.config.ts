import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Optional: Nur lokal verwenden
let localPlugins: any[] = [];
if (process.env.NODE_ENV !== "production") {
  try {
    const { jsxLocPlugin } = await import("@builder.io/vite-plugin-jsx-loc");
    const { vitePluginManusRuntime } = await import("vite-plugin-manus-runtime");
    localPlugins.push(jsxLocPlugin(), vitePluginManusRuntime());

    // Manus Debug Collector lokal aktivieren
    const fs = await import("node:fs");

    function vitePluginManusDebugCollector() {
      return {
        name: "manus-debug-collector",
        configureServer(server: any) {
          const LOG_DIR = path.join(process.cwd(), ".manus-logs");
          if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
        },
      };
    }

    localPlugins.push(vitePluginManusDebugCollector());
  } catch (e) {
    console.warn("Lokale Dev-Plugins konnten nicht geladen werden:", e);
  }
}

// Haupt-Plugins: React + Tailwind
const plugins = [react(), tailwindcss(), ...localPlugins];

export default defineConfig({
  root: "client", // Root ist client/
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),       // <- korrekt für Netlify
      "@shared": path.resolve(__dirname, "shared"),    // außerhalb von client/
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  envDir: ".",
  build: {
    outDir: "dist/public",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: true,
  },
});
