<!-- ./error.vue -->
<script setup lang="ts">
// Define the error prop that Nuxt will pass to the component
defineProps({
  error: Object,
});

// Function to clear the error and redirect to the homepage
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div>
    <SiteHeader />
    <main class="site-main">
      <div class="error-container">
        <h2>Oops! Something went wrong.</h2>
        <p>We're sorry, but an unexpected error occurred.</p>
        <button @click="handleError" class="error-button">
          Go to Homepage
        </button>
      </div>
    </main>
  </div>
</template>

<style scoped>
.error-container {
  text-align: center;
  padding: 3rem 1rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1.5rem;
}

.error-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #34495e;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.error-button:hover {
  background-color: #41b883;
}
</style>