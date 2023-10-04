import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

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
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
    
  },
})
