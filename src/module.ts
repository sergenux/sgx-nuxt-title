import { name, version } from "../package.json";

import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name,
    version,
    configKey: "sgxTitle",
  },
  setup() {},
});
