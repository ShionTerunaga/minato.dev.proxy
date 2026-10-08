<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <h1 class="page-title">
    <template v-if="title">{{ title }}</template>
    <slot v-else />
  </h1>
</template>

<style scoped>
.page-title {
  margin: 0 0 1rem;
  color: #6ea8ff !important;
  font-family: Atkinson, ui-sans-serif, system-ui, sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.01em;
}
</style>
