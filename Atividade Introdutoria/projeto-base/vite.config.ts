import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Define o caminho relativo para o GitHub Pages não se perder nas pastas
  base: './', 
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Aqui está o segredo: ele joga o site pronto direto na pasta da atividade
    outDir: '../Atividade 1', 
    // Garante que a pasta de destino seja limpa antes de cada build
    emptyOutDir: true, 
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})