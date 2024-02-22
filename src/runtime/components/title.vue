<template>
  <component :is="as">
    <slot :title="title">{{ title }}</slot>
  </component>
</template>

<script setup lang="ts">
import { useTitle } from '../composables/title'
import type { Props, Slot } from './title'

withDefaults(defineProps<Props>(), { as: 'h1' })
defineSlots<{ default(props: Slot): any }>()

const title = useTitle()
</script>
