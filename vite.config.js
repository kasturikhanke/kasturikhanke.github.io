import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // Add this line for correct asset paths in production
  plugins: [react()],
  assetsInclude: ['**/*.mov']
})