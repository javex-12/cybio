import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'logo.png', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Biobyte Pro',
        short_name: 'Biobyte',
        description: 'Professional Biology Quiz and Study Simulator',
        theme_color: '#2563eb',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10MB
        globPatterns: ['**/*.{js,css,html,ico,png,svg,ts,tsx}'],
      }
    })
  ],
})
