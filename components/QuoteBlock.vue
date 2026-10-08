<template>
  <blockquote class="quote-block">
    <p><slot /></p>
  </blockquote>
</template>

<style scoped>
.quote-block {
  position: relative;
  margin: 3rem 0 0;
  padding: 1.75rem 2rem 1.5rem 2.5rem;
  color: #eaeaea;
  border: 0;
  border-left: 5px solid #6ea8ff;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.65;
  transition: opacity 500ms ease;
}

.quote-block::before {
  position: absolute;
  top: -0.35rem;
  left: 0.65rem;
  color: rgb(110 168 255 / 45%);
  font-family: Georgia, serif;
  font-size: 4rem;
  line-height: 1;
  content: "“";
}

.quote-block p {
  margin: 0;
  line-height: inherit;
}
</style>
