<template>
  <div>
    <nav>
      <NuxtLink to="/">Back to Home page</NuxtLink>
    </nav>
    <h1>{{ title }}</h1>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const title = useSgxTitle();
</script>
