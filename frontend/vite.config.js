import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", // browsers can handle the latest ES features
  },
  server: {
    host: true,
    port: 3000,
    proxy: {}, //use if you build out your backend
  },
});
