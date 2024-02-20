import type { ModuleConfig } from "../types/title";
import {
  computed,
  useRoute,
  useRuntimeConfig,
  type ComputedRef,
} from "#imports";

export function useTitle(): ComputedRef<string> {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();

  return computed(() => {
    const moduleConfig = runtimeConfig.public.sgxTitle as ModuleConfig;
    const titleKey = moduleConfig.titleKey;
    const title = route.meta[titleKey];
    return typeof title === "string" ? title : "";
  });
}
