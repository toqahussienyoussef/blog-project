// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  runtimeConfig: {
    baseURL: "http://16.171.22.84",
    public: {
      baseURL: process.env.BASE_URL || "http://16.171.22.84/api",
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "vuetify/styles",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/css/main.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxt/test-utils/module",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        config.plugins.push(vuetify())
      );
    },
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    ssr: {
      noExternal: ["vuetify"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/variables.scss" as*;',
        },
      },
    },
  },
  plugins: ["plugins/vuetify.ts"],
});
