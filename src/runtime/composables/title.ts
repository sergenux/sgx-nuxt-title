import { computed, useRoute, type ComputedRef } from '#imports'

type Composable = () => ComputedRef<string>

export const useTitle: Composable = () => {
  const route = useRoute()
  return computed(() => route.meta.title ?? '')
}
