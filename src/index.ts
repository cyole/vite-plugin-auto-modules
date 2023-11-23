import type { Plugin } from 'vite'
import type { App } from 'vue'
import type { Config } from './types'
import { normalizePath } from './utils'

export type UserModule = (app: App<Element>) => void

export default function (userConfig?: Partial<Config>): Plugin {
  const config = Object.assign({
    moduleDir: '/src/modules',
  }, userConfig)

  const virtualModuleId = 'virtual:auto-modules'
  const resolvedVirtualModuleId = `\0${virtualModuleId}`

  return {
    name: 'vite-plugin-auto-modules',
    resolveId(id) {
      if (id === virtualModuleId)
        return resolvedVirtualModuleId
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const moduleDir = normalizePath(config.moduleDir)

        return `
          export const modules = import.meta.glob('${moduleDir}/*.ts', { eager: true })
          export const installModules = app => {
            Object.values(modules).forEach(module => {
                if(!module.install) {
                    console.error('Module must have an install function')
                    return
                }
                module.install(app)
            })
          }
        `
      }
    },
  }
}
