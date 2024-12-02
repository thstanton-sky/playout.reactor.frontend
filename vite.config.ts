import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "reactor",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {},
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "valtio",
        "@azure/msal-react",
        "@azure/msal-browser",
        "@mui/material",
        "@sky-uk/playout.uilibrary.frontend",
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
  },
  preview: {
    port: 4173,
  },
});
