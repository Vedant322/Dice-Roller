import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173, // Ensure this matches your actual port
    allowedHosts: [
      "2c08-2401-4900-1c09-6c3b-acf3-8c0-db6c-5550.ngrok-free.app",
    ],
  },
});
