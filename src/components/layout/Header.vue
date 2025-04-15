<script setup>
import companyLogo from '@/assets/logos/company-logo.png';
import { COMPANY_NAME } from '@/config.js';
// Header logic
</script>

<template>
  <header>
    <img :src="companyLogo" :alt="COMPANY_NAME + ' Logo'" class="logo"> <!-- Use the imported logo -->
    <nav>
      <ul>
        
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #f8f8f8;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex; /* Added for layout */
  align-items: center; /* Added for layout */
}
.logo {
  height: 40px; /* Example: Adjust size as needed */
  margin-right: 1rem; /* Add some space between logo and nav */
}
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}
</style>
