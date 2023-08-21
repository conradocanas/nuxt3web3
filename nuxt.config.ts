// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
