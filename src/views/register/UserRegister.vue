<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Register</h2>
    <form @submit.prevent="registerUser" class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-bold mb-2"
          >Name</label
        >
        <input
          type="text"
          id="name"
          v-model="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your name"
        />
        <p v-if="nameError" class="text-red-500 text-xs italic">
          {{ nameError }}
        </p>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
        />
        <p v-if="emailError" class="text-red-500 text-xs italic">
          {{ emailError }}
        </p>
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 font-bold mb-2"
          >Password</label
        >
        <input
          type="password"
          id="password"
          v-model="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your password"
        />
        <p v-if="passwordError" class="text-red-500 text-xs italic">
          {{ passwordError }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </div>
      <div v-if="registrationError" class="mt-4 text-red-500">
        {{ registrationError }}
      </div>
    </form>
  </div>
</template>

<script>
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

const REGISTER_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      customError
      token
    }
  }
`;

export default {
  name: "UserRegister",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      nameError: "",
      emailError: "",
      passwordError: "",
      registrationError: null,
    };
  },
  setup() {
    const { mutate: register } = useMutation(REGISTER_USER);
    return { register };
  },
  methods: {
    async registerUser() {
      this.nameError = "";
      this.emailError = "";
      this.passwordError = "";
      this.registrationError = null;

      if (!this.name) {
        this.nameError = "Name is required";
      }
      if (!this.email) {
        this.emailError = "Email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.email)) {
        this.emailError = "Invalid email format";
      }
      if (!this.password) {
        this.passwordError = "Password is required";
      } else if (this.password.length < 6) {
        this.passwordError = "Password must be at least 6 characters";
      }

      if (this.nameError || this.emailError || this.passwordError) {
        return;
      }

      try {
        const { data } = await this.register({
          name: this.name,
          email: this.email,
          password: this.password,
        });

        if (data.addUser.customError) {
          this.registrationError = data.addUser.customError;
        } else {
          // Store the token (e.g., in localStorage or a cookie)
          localStorage.setItem("token", data.addUser.token);
          // Redirect the user (e.g., to the home page)
          this.$router.push("/home"); // Example redirect
        }
      } catch (error) {
        console.error("Registration error:", error);
        this.registrationError =
          "An error occurred during registration. Please try again later.";
      }
    },
  },
};
</script>
