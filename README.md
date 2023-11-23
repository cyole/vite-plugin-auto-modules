# vite-plugin-auto-modules

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

> A Vite plugin that automatically use modules from a folder.

## Getting Started

Installation

```bash
pnpm install vite-plugin-auto-modules -D
```

Add to `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import AutoModules from 'vite-plugin-auto-modules'

export default defineConfig({
  plugins: [
    AutoModules({
      // options
    })
  ]
})
```

## Usage

main.ts

```ts 
import { createApp } from 'vue'
import { installModules } from 'virtual:auto-modules'
import App from './App.vue'

const app = createApp(App)

// install modules
installModules(app)

app.mount('#app')
```

Place a `.ts` file with the following template in the `moduleDir` folder, it will be installed automatically.

```ts
import type { UserModule } from 'vite-plugin-auto-modules'

export const install: UserModule = (app) => {
  // do something
}
```

## Client Types

If you want to use the types of the client, you need to add the following configuration to `tsconfig.json`.

```json
{
  "compilerOptions": {
    "types": ["vite-plugin-auto-modules/client"]
  }
}
```

## Configuration

```ts
export interface Config {
  /**
   * @default "/src/modules"
   */
  moduleDir?: string
}
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [Cyole](https://github.com/cyole)


<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/vite-plugin-auto-modules?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/vite-plugin-auto-modules
[npm-downloads-src]: https://img.shields.io/npm/dm/vite-plugin-auto-modules?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/vite-plugin-auto-modules
[bundle-src]: https://img.shields.io/bundlephobia/minzip/vite-plugin-auto-modules?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=vite-plugin-auto-modules
[license-src]: https://img.shields.io/github/license/cyole/vite-plugin-auto-modules.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/cyole/vite-plugin-auto-modules/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/vite-plugin-auto-modules
