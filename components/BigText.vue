<template>
  <div class="big-text">
    <slot />
  </div>
</template>

<style scoped>
.big-text {
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #eaeaea;
  font-family: Atkinson, ui-sans-serif, system-ui, sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.65;
  transition: opacity 500ms ease;
}

.big-text :deep(p) {
  margin: 0;
  line-height: inherit;
}

.big-text :deep(blockquote) {
  font-size: inherit;
  line-height: inherit;
}

.big-text + .big-text {
  margin-top: 0.75rem;
}

.big-text :deep(li + li) {
  margin-top: 0.4rem;
}
</style>
