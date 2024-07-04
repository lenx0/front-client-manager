import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
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
