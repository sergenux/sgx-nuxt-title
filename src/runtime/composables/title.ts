import { computed, useRoute, type ComputedRef } from '#imports'

export function useTitle(): ComputedRef<string> {
  const route = useRoute()
  return computed(() => route.meta.title ?? '')
}
