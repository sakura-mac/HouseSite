import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'https://swallow-homes-api.perriersuda.workers.dev',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});
