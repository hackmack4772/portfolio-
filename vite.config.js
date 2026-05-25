import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    host: true,
    allowedHosts: [
      "yj6dn4-5173.csb.app",
      "https://hackmack.vercel.app",
      "scpxky-5173.csb.app",
      "yj6dn4-5174.csb.app",
      "qgrmyl-5173.csb.app",
    ],
  },
});
