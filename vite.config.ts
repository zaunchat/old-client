import { defineConfig } from "vite";


import preact from "@preact/preset-vite";
import sassDts from "vite-plugin-sass-dts";

export default defineConfig({
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
