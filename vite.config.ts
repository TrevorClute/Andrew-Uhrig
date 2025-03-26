import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
=======
  server: {
    host : '0.0.0.0',
    port : 5174
  },
>>>>>>> f2da03e9cb29f855bfc7cd77914650f5ab60297e
  plugins: [react(),tailwindcss()],
})
