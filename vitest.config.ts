import { defineVitestConfig } from '@nuxt/test-utils/config'
import { Vue } from '@vitejs/plugin-vue';

export default defineVitestConfig({
    plugins: [Vue()],
    test: {
        globals: true,
    }
  // any custom Vitest config you require
})
