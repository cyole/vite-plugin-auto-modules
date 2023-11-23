import { createApp } from 'vue'
import { installModules } from 'virtual:auto-modules'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
// })
// app.use(router)

installModules(app)

app.mount('#app')
