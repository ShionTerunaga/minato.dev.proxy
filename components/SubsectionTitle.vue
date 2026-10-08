<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <h2 class="subsection-title">
    <template v-if="title">{{ title }}</template>
    <slot v-else />
  </h2>
</template>

<style scoped>
.subsection-title {
  margin: 0 0 1.25rem;
  color: #eaeaea !important;
  font-family: Atkinson, ui-sans-serif, system-ui, sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: 0.01em;
}
</style>
