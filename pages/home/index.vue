<script setup>
import Hero from './Hero.vue';
import Features from './Features.vue';
import CallToAction from './CallToAction.vue';

// Any page-specific logic for the home page can go here
</script>

<template>
  <div class="home-page">
    <Hero />
    <Features />
    <CallToAction />
    <!-- You can add other components like footers etc. here -->
  </div>
</template>

<style scoped>
.home-page {
  /* Add styles for the overall home page layout if needed */
}
</style>