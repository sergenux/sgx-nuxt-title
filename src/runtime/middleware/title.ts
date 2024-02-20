import { defineNuxtRouteMiddleware, useRuntimeConfig } from "#imports";
import { titleCase } from "scule";
import { parseFilename, withoutTrailingSlash } from "ufo";
import type { ModuleConfig } from "../types/title";

export default defineNuxtRouteMiddleware((route) => {
  const runtimeConfig = useRuntimeConfig();
  const moduleConfig = runtimeConfig.public.sgxTitle as ModuleConfig;
  const titleKey = moduleConfig.titleKey;

  if (route.meta[titleKey] === undefined) {
    const path = withoutTrailingSlash(route.path);
    const basename = parseFilename(path, { strict: false });
    route.meta[titleKey] = basename ? titleCase(basename) : "Home";
  }
});
