<template>
  <section class="hero">
    <div class="hero-content">
      <div class="text-content">
        <h1>HenryCRM</h1>
        <h2>Your AI powered concierge</h2>
        <p>South African Automative</p>
      </div>
      <div class="image-content">
        <img src="@/assets/logos/company-logo.png" alt="Company Logo" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 2rem;
}

.hero-content {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.text-content {
  flex: 1;
}

.image-content {
  flex: 1;
}

img {
  max-width: 100%;
  height: auto;
}
</style>