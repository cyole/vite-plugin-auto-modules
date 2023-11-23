import { createRouter, createWebHistory } from 'vue-router/auto'
import type { UserModule } from 'vite-plugin-auto-modules'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})

export const install: UserModule = (app) => {
  app.use(router)
}
