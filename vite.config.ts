import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "components": path.resolve(__dirname, "src/components"),
      "types": path.resolve(__dirname, "src/types"),
      "utils": path.resolve(__dirname, "src/utils"),
    },
  },
  plugins: [react()],
})
