import { defineConfig } from "vite";


import preact from "@preact/preset-vite";
import sassDts from "vite-plugin-sass-dts";

import path from "path";

export default defineConfig({
  "resolve": {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  "optimizeDeps": {
    "esbuildOptions": {
      "target": "es2020"
    }
  },
  plugins: [
    preact(),
    sassDts({
      enabledMode: ["development"],
    }),
  ],
  build: {
    target: "ESNext",
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
