import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this project from https://aymnb7178.github.io/aymenverse/
// so the base path has to match the repo name in production builds.
export default defineConfig({
  base: process.env.GITHUB_PAGES ? "/aymenverse/" : "/",
  plugins: [react()],
});
