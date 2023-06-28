import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteSingleFile } from "vite-plugin-singlefile";
import vueJsx from "@vitejs/plugin-vue-jsx";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [vue(), viteSingleFile(), mkcert(), vueJsx({})],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    target: "es2017",
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    sourcemap: false,
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
    },
    outDir: "build",
  },
  // root: "web/",
  server: {
    https: true,
  },
});
