import { name, version } from "../package.json";
import {
  addRouteMiddleware,
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name,
    version,
    configKey: "sgxTitle",
  },
  setup() {
    const { resolve } = createResolver(import.meta.url);

    addRouteMiddleware({
      name: "sgx-title",
      path: resolve("./runtime/middleware/sgx-title"),
      global: true,
    });

    addTypeTemplate({
      filename: "./types/sgx-title.d.ts",
      getContents: () => `
      declare module "#app/../pages/runtime/composables" {
        interface PageMeta {
          title?: string;
        }
      }
      export {};`,
    });
  },
});
