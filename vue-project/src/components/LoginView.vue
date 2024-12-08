<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" placeholder="Enter your email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" placeholder="Enter your password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { login } from "../services/api";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await login(this.email, this.password);
        localStorage.setItem("token", response.token); // Sla het token op
        this.$router.push("/home"); // Navigeer naar de beveiligde homepagina
      } catch (error) {
        this.errorMessage = "Login failed. Please try again.";
      }
    },
  },
};
</script>

<style>
/* Voeg hier je eigen styling toe */
.error {
  color: red;
}
</style>
