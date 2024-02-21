<template>
  <component :is="as">
    <slot :title="title">
      <h1>{{ title }}</h1>
    </slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTitle } from "../composables/title";

export default defineComponent({
  props: {
    as: {
      type: String,
      default: "div",
    },
  },
  setup() {
    const title = useTitle();

    return { title };
  },
});
</script>
