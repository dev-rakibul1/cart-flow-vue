<template>
  <div class="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
    <h1 class="text-2xl font-bold mb-4 text-center">User Form</h1>

    <form @submit.prevent="submitForm">
      <!-- Name -->
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Name</label
        >
        <input
          type="text"
          id="name"
          v-model="formData.name"
          class="w-full mt-1 p-2 border rounded focus:ring"
          placeholder="Enter your name"
          required
        />
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="w-full mt-1 p-2 border rounded focus:ring"
          placeholder="Enter your email"
          required
        />
      </div>

      <!-- Password -->
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <input
          type="password"
          id="password"
          v-model="formData.password"
          class="w-full mt-1 p-2 border rounded focus:ring"
          placeholder="Enter your password"
          required
        />
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-yellow-500 text-white py-2 rounded transition"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define form data
const formData = ref({
  name: "",
  email: "",
  password: "",
});

// Handle form submission
const submitForm = () => {
  console.log("Form Submitted:", formData.value);
  alert(
    `Form Submitted: \nName: ${formData.value.name}\nEmail: ${formData.value.email}`
  );
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
