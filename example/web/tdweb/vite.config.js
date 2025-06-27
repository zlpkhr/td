import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    lib: {
      name: 'tdweb',
      entry: './src/index.js',
      formats: ['es']
    },
    minify: false
  },
  worker: {
    format: 'es',
  },
});
