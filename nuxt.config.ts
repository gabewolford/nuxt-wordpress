// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      // wordpressUrl: "http://nuxt-wordpress.local/graphql",
      wordpressUrl: "https://nuxtwordpresss.wpenginepowered.com/graphql",
    },
  },
});
