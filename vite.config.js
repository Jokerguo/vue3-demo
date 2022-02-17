import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname,'src') // 设置@指向src文件
    }
  },
  base: './',  // 打包路径
  server: {
    port: 4000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
            target: 'http://119.29.44.30:30006',
            changeOrigin: true,
            secure: false,
            // rewrite: (path) => path.replace('/api/', '/')
      }
    }
  },
})
