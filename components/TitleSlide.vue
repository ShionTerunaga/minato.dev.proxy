<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subtitle?: string
  name?: string
  avatar?: string
}>(), {
  title: '',
  subtitle: '',
  name: 'てるし〜',
  avatar: 'https://avatars.githubusercontent.com/u/69517378?v=4&size=64',
})
</script>

<template>
  <section class="title-slide">
    <div class="title-slide__heading">
      <h1 v-if="title">{{ title }}</h1>
      <h1 v-else><slot /></h1>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>

    <div class="title-slide__author">
      <img :src="avatar" :alt="`${name}のアイコン`">
      <span>{{ name }}</span>
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

.title-slide {
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

.title-slide__heading {
  width: min(78%, 860px);
}

.title-slide h1 {
  margin: 0;
  color: inherit;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 0;
}

.title-slide__heading p {
  margin: 1rem 0 0;
  color: rgb(150 160 184);
  font-size: 1.15rem;
  letter-spacing: 0.02em;
}

.title-slide__author {
  position: absolute;
  right: 2.5rem;
  bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.05rem;
  font-weight: 700;
}

.title-slide__author img {
  width: 52px;
  height: 52px;
  border: 1px solid rgb(255 255 255 / 12%);
  border-radius: 12px;
  object-fit: cover;
}
</style>
