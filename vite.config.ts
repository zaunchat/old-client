import { defineConfig } from "vite";

import path from "path";

import preact from "@preact/preset-vite";
import sassDts from "vite-plugin-sass-dts";

export default defineConfig({
  plugins: [
    preact(),
    sassDts({
      enabledMode: ["development"],
      global: {
        generate: true,
        outFile: path.resolve(__dirname, "./src/style.d.ts"),
      },
    }),
  ],
  build: {
    target: "ESNext",
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
