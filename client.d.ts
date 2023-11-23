declare module 'virtual:auto-modules' {
  import type { App } from 'vue'

  export const modules: Record<string, unknown>
  export const installModules: (app: App) => void
}
