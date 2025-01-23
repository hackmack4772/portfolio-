import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["yj6dn4-5173.csb.app", "https://hackmack.vercel.app"],
  },
});
