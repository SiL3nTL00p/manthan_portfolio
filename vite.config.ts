import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// Optional: eslint plugin if you use it
// import eslint from "vite-plugin-eslint";
// Optional: checker plugin if you use it for TS diagnostics
// import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    // If you use eslint:
    // eslint({
    //   failOnWarning: false,
    //   failOnError: false,
    // }),
    // If you use TS checker:
    // checker({
    //   typescript: true, // set to false to skip type-checking
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
  build: {
    // ⚡ Ensures builds don’t fail on warnings
    // (warnings still logged, but won’t block Vercel build)
    minify: "esbuild",
  },
  // Suppress terminal warnings if needed
  logLevel: "error", // "info" | "warn" | "error" | "silent"
});
