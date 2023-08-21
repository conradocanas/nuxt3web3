// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt3 - Wagmi/Web3Modal',
    },
  },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      WALLETCONNECT_PROJECT_ID: process.env.WALLETCONNECT_PROJECT_ID,
    },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
