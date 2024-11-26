import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import vitePluginRequire from 'vite-plugin-require';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    vitePluginRequire.default(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base: './',
  build: {
    commonjsOptions: { transformMixedEsModules: true } // Change
  },
  resolve: {
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
