# sgx-nuxt-title

Auto title feature for Nuxt pages.

## Quick Start

1. Install package:

```bash
npm install sgx-nuxt-title
```

2. Add module to `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ["sgx-nuxt-title"],
});
```

3. Prepare types:

```bash
npx nuxi prepare
```

4. Add component to `app.vue`:

```vue
<template>
  <div>
    <SgxTitle />
    <NuxtPage />
  </div>
</template>
```

## Module config

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["sgx-nuxt-title"],
  sgxTitle: {
    // Module config
  },
});
```

```ts
interface ModuleConfig {
  /**
   * Prefix for components and composables.
   * @default "Sgx"
   */
  prefix: string;
}
```

## Composables

### useTitle

Type:

```ts
declare function useTitle(): ComputedRef<string>;
```

Usage:

```vue
<template>
  <h1>{{ title }}</h1>
</template>

<script setup lang="ts">
// If auto-import is disabled
// import { useSgxTitle } from "#imports";

const title = useSgxTitle();
</script>
```

## Components

### \<SgxTitle\>

Usage:

```vue
<template>
  <SgxTitle />
</template>

<script setup lang="ts">
// If auto-import is disabled
// import { SgxTitle } from "#components";
</script>
```

Override component template:

```vue
<template>
  <SgxTitle v-slot="{ title }">
    <h1>{{ title }}</h1>
  </SgxTitle>
</template>
```

## Page Meta

Override auto title:

```vue
<script setup lang="ts">
definePageMeta({
  title: "My page title",
});
</script>
```

Override with dynamic data:

```vue
<script setup lang="ts">
definePageMeta({
  middleware: async (route) => {
    const data = await fetchData();
    route.meta.title = data.title;
  },
});
</script>
```

## Example

Pages:

```bash [Directory Structure]
-| blog/
---| index.vue
---| post-1.vue
---| post-2.vue
---| post-3.vue
-| index.vue
```

Auto titles:

- `/` - Home
- `/blog` - Blog
- `/blog/post-1` - Post 1
- `/blog/post-2` - Post 2
- `/blog/post-3` - Post 3

## Development

```bash
# Clone repository
git clone https://github.com/sergenux/sgx-nuxt-title.git

# Change directory
cd sgx-nuxt-title

# Install dependencies
npm install

# Prepare types
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Code checks
npm run typecheck
npm run lint
npm run lint:fix
npm run format
npm run format:fix
```
