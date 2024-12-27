<script>
import { ref } from "vue";
import { gql } from "@apollo/client/core";
import { useMutation } from "@vue/apollo-composable";

export default {
  name: "RegisterDemo",

  setup() {
    // Define the GraphQL mutation
    const REGISTER_USER = gql`
      mutation register($name: String!, $email: String!, $password: String!) {
        addUser(name: $name, email: $email, password: $password) {
          customError
          token
        }
      }
    `;

    // Use the mutation with Apollo
    const { mutate: register, onDone, onError } = useMutation(REGISTER_USER);

    // Define reactive variables for the form inputs
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const result = ref(null);
    const error = ref(null);

    // Handle form submission
    const handleSubmit = async () => {
      // Prepare the variables for the mutation
      const variables = {
        name: name.value,
        email: email.value,
        password: password.value,
      };

      // Debug log to check the variables
      console.log("Variables being sent:", variables);

      // Check if all required fields are filled
      if (!variables.name || !variables.email || !variables.password) {
        console.error("Error: Missing required fields", variables);
        return;
      }

      try {
        // Execute the mutation with variables
        const response = await register({ variables });

        // Handle successful mutation
        result.value = response.data;
        console.log("Mutation Success:", response.data);
      } catch (err) {
        // Handle mutation error
        error.value = err;
        console.error("Mutation Error:", err);
      }
    };

    // Return the necessary variables and functions for the template
    return { name, email, password, handleSubmit, result, error };
  },
};
</script>

<template>
  <div class="max-w-md mx-auto p-4">
    <!-- Registration Form -->
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          v-model="name"
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          v-model="email"
          type="email"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Enter your password"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Submit
      </button>
    </form>

    <!-- Display mutation result -->
    <div v-if="result" class="mt-4 p-4 bg-green-100 text-green-700">
      Success! Token: {{ result.addUser.token }}
    </div>

    <!-- Display mutation error -->
    <div v-if="error" class="mt-4 p-4 bg-red-100 text-red-700">
      Error: {{ error.message }}
    </div>
  </div>
</template>
