import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    // Usar proxy si necesitas redirigir rutas no encontradas
    proxy: {
      '/api': 'http://localhost:3000',
    },
    // Redirigir todas las rutas al index.html
    fs: {
      strict: false
    }
  }
})
