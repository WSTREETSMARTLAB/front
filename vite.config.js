// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  plugins: [
    vue(),
      vuetify({autoImport: true})
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/app/styles/_variables.scss";`
      }
    }
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true
  },
})
