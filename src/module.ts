import { name, version } from '../package.json'
import {
  addComponent,
  addImports,
  addRouteMiddleware,
  createResolver,
  defineNuxtModule
} from '@nuxt/kit'

export interface ModuleOptions {
  prefix?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'sgxTitle'
  },
  defaults: {
    prefix: 'Sgx'
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.build.transpile.push(resolve('runtime'))

    addRouteMiddleware({
      name: 'sgx-title',
      path: resolve('runtime/middleware/title'),
      global: true
    })

    addComponent({
      name: `${options.prefix}Title`,
      filePath: resolve('runtime/components/title.vue')
    })

    addImports({
      name: 'useTitle',
      as: `use${options.prefix}Title`,
      from: resolve('runtime/composables/title')
    })
  }
})

declare module '#app/../pages/runtime/composables' {
  interface PageMeta {
    title?: string
  }
}
