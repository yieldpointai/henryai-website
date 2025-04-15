<script setup>
// Import the company name constant
import { COMPANY_NAME } from '../../config.js';

// Footer logic (if any more is needed)
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <!-- Use the imported constant and calculated year -->
    <p>&copy; {{ currentYear }} {{ COMPANY_NAME }}. All rights reserved.</p>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 2rem;
  padding: 1rem;
  background-color: var(--footer-bg, #eee); /* Use variable */
  text-align: center;
  font-size: 0.9rem;
  color: var(--footer-text, #555); /* Use variable */
}
</style>