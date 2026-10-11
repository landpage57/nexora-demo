
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        services: resolve(__dirname, "services.html"),
        about: resolve(__dirname, "about.html"),
        work: resolve(__dirname, "work.html"),
        pricing: resolve(__dirname, "pricing.html"),
        faq: resolve(__dirname, "faq.html"),
        documentation: resolve(__dirname, "Documentation.html"),
      },
    },
  },
});
