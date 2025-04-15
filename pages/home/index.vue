<script setup>
// Home Page Sections
import Hero from './Hero.vue';
import Features from './Features.vue';
import CallToAction from './CallToAction.vue';

// Layout Components
import Header from '../../src/components/layout/Header.vue';
import Footer from '../../src/components/layout/Footer.vue';

// Any page-specific logic for the home page can go here
</script>

<template>
  <Header />
  <main class="home-page">
    <Hero />
    <Features />
    <CallToAction />
  </main>
  <Footer />
</template>

<style scoped>
.home-page {
  /* Add styles for the main content area if needed */
  /* For example, padding to separate from header/footer */
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>