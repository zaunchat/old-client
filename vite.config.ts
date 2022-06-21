import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact({ devtoolsInProd: true })],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
