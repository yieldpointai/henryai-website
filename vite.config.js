import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // Import path module again

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Re-add the explicit alias
    },
  },
})
