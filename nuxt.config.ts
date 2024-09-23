// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  app: {
    head: {
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0'
    }
  },

  typescript: {
    typeCheck: true
  },

  srcDir: './src',
  devtools: { enabled: true },
  devServer: { host: '0.0.0.0' },
  ssr: false,

  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true,
      hmr: {
        protocol: 'ws',
        host: '0.0.0.0',
        port: 5183
      }
    }
  }
})
