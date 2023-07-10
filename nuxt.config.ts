import { pwa } from './config/pwa'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-lodash',
    'nuxt-headlessui',
    '@vueuse/motion/nuxt'
  ],

  css: [
    '@unocss/reset/tailwind.css',
  ],
  
  pwa
})
