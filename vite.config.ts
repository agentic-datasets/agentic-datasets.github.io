import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// outDir is docs/ so GitHub Pages can serve the built site from the branch
// without a separate publishing workflow. base is absolute, not './', because
// this is an organization root site served from / rather than a project path.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      // Two entries, one bundle of shared code: the terms page is built by the
      // same pipeline as the homepage so it cannot drift from it stylistically.
      input: {
        main: path.resolve(__dirname, 'index.html'),
        legal: path.resolve(__dirname, 'legal.html'),
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
