<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subtitle?: string
}>(), {
  title: '',
  subtitle: '',
})
</script>

<template>
  <section class="section-title">
    <div class="section-title__heading">
      <h1 v-if="title">{{ title }}</h1>
      <h1 v-else><slot /></h1>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>

  </section>
</template>

<style scoped>
@font-face {
  font-family: Atkinson;
  src: url('https://blog-from2026.pages.dev/fonts/atkinson-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Atkinson;
  src: url('https://blog-from2026.pages.dev/fonts/atkinson-bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

.section-title {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: #eaeaea;
  background: #232323;
  font-family: Atkinson, ui-sans-serif, system-ui, sans-serif;
  text-align: center;
}

.section-title__heading {
  width: min(78%, 860px);
}

.section-title h1 {
  margin: 0;
  color: inherit;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 0;
}

.section-title__heading p {
  margin: 1rem 0 0;
  color: rgb(150 160 184);
  font-size: 1.15rem;
  letter-spacing: 0.02em;
}

</style>
