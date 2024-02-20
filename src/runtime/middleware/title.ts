import { defineNuxtRouteMiddleware, useRuntimeConfig } from "#imports";
import { titleCase } from "scule";
import { parseFilename, withoutTrailingSlash } from "ufo";

export default defineNuxtRouteMiddleware((route) => {
  const runtimeConfig = useRuntimeConfig();
  const moduleConfig = runtimeConfig.public.sgxTitle;
  const titleKey = moduleConfig.titleKey;

  if (titleKey && route.meta[titleKey] === undefined) {
    const path = withoutTrailingSlash(route.path);
    const basename = parseFilename(path, { strict: false });
    route.meta[titleKey] = basename ? titleCase(basename) : "Home";
  }
});
