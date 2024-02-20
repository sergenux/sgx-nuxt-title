import { name, version } from "../package.json";
import type { ModuleConfig } from "./runtime/types/title";
import {
  addComponent,
  addImports,
  addRouteMiddleware,
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";

export default defineNuxtModule<ModuleConfig>({
  meta: {
    name,
    version,
    configKey: "sgxTitle",
  },
  defaults: {
    prefix: "Sgx",
    titleKey: "title",
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    nuxt.options.build.transpile.push(resolve("runtime"));

    nuxt.options.runtimeConfig.public.sgxTitle = options;

    addRouteMiddleware({
      name: "sgx-title",
      path: resolve("runtime/middleware/title"),
      global: true,
    });

    addComponent({
      name: `${options.prefix}Title`,
      filePath: resolve("runtime/components/title.vue"),
    });

    addImports({
      name: "useTitle",
      as: `use${options.prefix}Title`,
      from: resolve("runtime/composables/title"),
    });

    addTypeTemplate({
      filename: "types/sgx-title.d.ts",
      getContents: () => `
      declare module "@nuxt/schema" {
        interface PublicRuntimeConfig {
          sgxTitle: ModuleConfig;
        }
      }
      declare module "#app/../pages/runtime/composables" {
        interface PageMeta {
          ${options.titleKey}?: string;
        }
      }
      export {};`,
    });
  },
});
