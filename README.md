# sgx-nuxt-title

Auto-titles for Nuxt pages.

## Setup

1.  Install package:

```bash
npm install sgx-nuxt-title
```

2. Add package to `modules` in `nuxt.config.ts`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['sgx-nuxt-title']
})
```

3. Add `<SgxTitle>` component to layout or `app.vue`:

```vue
<template>
  <div>
    <SgxTitle />
    <NuxtPage />
  </div>
</template>
```

## Configuration

**Type:**

```ts
interface NuxtConfig {
  sgxTitle?: ModuleOptions
}

interface ModuleOptions {
  // Prefix for components and composables
  // Default: 'Sgx'
  prefix?: string
}
```

**Usage:**

Set module options to `sgxTitle` in `nuxt.config.ts`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['sgx-nuxt-title'],
  sgxTitle: {
    // Module options...
  }
})
```

## Page properties

**Type:**

```ts
interface PageMeta {
  // Page title
  // Default: Generated from URL slug
  title?: string
}
```

**Usage:**

Override auto-title:

```vue
<script setup lang="ts">
definePageMeta({
  title: 'My page title'
})
</script>
```

Override with dynamic data:

```vue
<script setup lang="ts">
definePageMeta({
  middleware: async (route) => {
    const data = await fetchData(route.params)
    route.meta.title = data.title
  }
})
</script>
```

## Components

### `<SgxTitle>`

**Types:**

```ts
interface Props {
  // Element
  // Default: 'h1'
  as?: string
}

interface Slot {
  // Page title
  title?: string
}
```

**Usage:**

Basic usage:

```vue
<template>
  <SgxTitle />
</template>
```

Override component template:

```vue
<template>
  <SgxTitle v-slot="{ title }" as="div">
    <h1>{{ title }}</h1>
  </SgxTitle>
</template>
```

## Composables

### `useSgxTitle`

**Type:**

```ts
interface Composable {
  (): ComputedRef<string>
}
```

**Usage:**

```vue
<template>
  <h1>{{ title }}</h1>
</template>

<script setup lang="ts">
const title = useSgxTitle()
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

Generated auto-titles:

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

# Develop with playground
npm run dev

# Build playground
npm run dev:build

# Code checks
npm run typecheck
npm run lint
npm run lint:fix
npm run format
npm run format:fix
```
