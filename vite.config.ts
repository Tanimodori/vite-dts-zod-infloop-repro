import { defineConfig } from "vite";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: [resolve(__dirname, "src/index.ts")],
      formats: ["es"],
    },
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
  },
  plugins: [dts()],
});
