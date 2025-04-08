import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
// Utiliser notre wrapper personnalisé au lieu de sass directement
import sassWrapper from './sass-wrapper';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kasa/', // Pour GitHub Pages
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build', // Pour conserver le même dossier que CRA
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Utiliser notre wrapper sans avertissements
        implementation: sassWrapper,
        additionalData: '/* Processed with Sass Wrapper */',
        quietDeps: true, // Désactiver les avertissements des dépendances
      }
    },
  },
}); 