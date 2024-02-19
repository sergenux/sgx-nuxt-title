import { computed, useRoute, type ComputedRef } from "#imports";

export function useTitle(): ComputedRef<string> {
  const route = useRoute();
  const title = computed(() => (route.meta.title as string) ?? "");
  return title;
}
