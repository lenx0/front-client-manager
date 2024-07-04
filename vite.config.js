import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-redux',
        'redux-persist',
        'redux-persist/integration/react',
        'redux-persist/lib/storage',
        '@reduxjs/toolkit'
      ],
    },
  },
});
