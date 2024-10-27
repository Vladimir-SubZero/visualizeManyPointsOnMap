import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base: './',
  build: {
    // rollupOptions: {
    //   output: {
    //     assetFileNames: () => {
    //       return `[name]-[hash][extname]`;
    //     },
    //     chunkFileNames: '[name]-[hash].js',
    //     entryFileNames: '[name]-[hash].js',
    //   },
    // },
  },
  resolve: {
    // alias: {
    //   '@': fileURLToPath(new URL('./src', import.meta.url))
    // }
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    proxy: {
      '/gis': {
        target: 'http://localhost:3020',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  test: {
    browser: {
      enabled: false,
    },
  },
});
