import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  // This is configured for ViteApiProxyExample
  server: {
    // Configure Vite’s dev-time proxy
    proxy: {
      '/apiproxy': {
        // Actual external API target
        target: 'https://dog.ceo', 
        // Ensure the host header is updated to match the target
        changeOrigin: true, 
        // Allow HTTPS (even with self-signed certs)
        secure: true, 
        // Rewrites /apiproxy/api/... to /api/... for the actual backend
        rewrite: (path) => path.replace(/^\/apiproxy/, ''),
      },
    },
  },
});
