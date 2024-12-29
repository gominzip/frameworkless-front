import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@core": path.resolve(__dirname, "src/core"),
    },
  },
  esbuild: {
    jsxInject: `import React from '@core/React'`,
    jsxFactory: "React.createElement",
  },
  envPrefix: "VITE_",
});
