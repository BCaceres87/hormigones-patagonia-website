import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, 
    // allowedHosts: ['f305-2803-c600-d304-dbb0-a85e-760b-5f33-b77.ngrok-free.app']
  },
  // base: '/hormigones-patagonia-website/',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#76991A',
          '@secondary-color': '#FFFFFF',
          '@disabled-bg': '#E3EAD1',
          '@error-color': '#76991A',
          '@border-radius-base': '4px',
          '@btn-height-base': '40px',
          '@btn-padding-horizontal-base': '24px',
          '@font-size-base': '16px',
          '@btn-font-weight': '600',
          '@input-height-base': '40px',
          '@input-border-color': '#000000',
        },
      },
    },
  },
})
