import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Allow access from any host
    port: 3000, // Specify the port to run the server on
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})