import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       // Force ESM entry for animejs v4.x
//       animejs: 'animejs/dist/anime.es.js',
//     },
//   },
//   optimizeDeps: {
//     // Prebundle the exact file we aliased to
//     include: ['animejs/dist/anime.es.js'],
//     exclude: ['lucide-react'],
//   },
// })
