
import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/nexora-demo/",

  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        services: resolve(__dirname, "services.html"),
        work: resolve(__dirname, "work.html"),
        pricing: resolve(__dirname, "pricing.html"),
        faq: resolve(__dirname, "faq.html"),
        documentation: resolve(__dirname, "Documentation.html"),
      },
    },
  },
});
