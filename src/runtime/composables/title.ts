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
    const moduleConfig = runtimeConfig.public.sgxTitle;
    const titleKey = moduleConfig.titleKey;
    const title = titleKey && route.meta[titleKey];
    return typeof title === "string" ? title : "";
  });
}
