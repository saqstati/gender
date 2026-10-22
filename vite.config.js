import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// pcaxis-api does not send CORS headers, so the browser calls it via same-origin /pcaxis-api.
const pcaxisProxy = {
  "/pcaxis-api": {
    target: "https://pcaxis-api.geostat.ge",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/pcaxis-api/, ""),
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    proxy: pcaxisProxy,
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
    proxy: pcaxisProxy,
  },
});
