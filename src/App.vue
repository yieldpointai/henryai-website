<script setup>
// Replace HelloWorld import with the new home page component
import HomePage from '../pages/home/index.vue';
</script>

<template>
  <!-- Use the new home page component -->
  <HomePage />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
