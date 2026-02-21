import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const normalizeBasePath = (basePath?: string) => {
  if (!basePath) return "/";
  const trimmed = basePath.trim();
  if (!trimmed || trimmed === "/") return "/";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}/`;
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: normalizeBasePath(process.env.VITE_BASE_PATH),
  server: {
    host: "localhost",
    port: 8080,
    strictPort: true,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
}));
