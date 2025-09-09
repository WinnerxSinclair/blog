// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content', 'nuxt-shiki', '@nuxtjs/color-mode'],
  shiki: {
    // bundle the grammars you need
    bundledLangs: ['vue', 'ts', 'js', 'html', 'css'],
    // (optional) pick themes + defaults
    bundledThemes: ['vitesse-dark', 'vitesse-light'],
    defaultTheme: 'vitesse-dark',

  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  // routeRules: {
  //   '/**': { isr: true }
  // },

  runtimeConfig: {
    mongooseConnectionString:''
  }
})