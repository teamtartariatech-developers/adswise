import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173,      // Default Vite port (you can change this)
    // Optional: Enable HTTPS if needed
    // https: true,
  },
  preview: {
    host: '0.0.0.0', // For production preview mode
    port: 4173,      // Default preview port
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});