<template>
  <div class="login-container">
    <h1 class="login-title">Login</h1>
    <form @submit.prevent="handleLogin" class="login-form">
      <input
        v-model="username"
        type="text"
        placeholder="Username"
        required
        class="login-input"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
        class="login-input"
      />
      <button type="submit" class="login-button">Login</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { login } from "@/services/api";

export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const data = await login(this.username, this.password);
        localStorage.setItem("token", data.token);
        this.$router.push("/home");
      } catch (error) {
        this.errorMessage = error.response?.data?.message || "Login failed";
      }
    },
  },
};
</script>

<style scoped>
/* Container for the login page */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

/* Title styling */
.login-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
}

/* Form styling */
.login-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Input fields styling */
.login-input {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
}

.login-input:focus {
  border-color: #007bff;
}

/* Login button styling */
.login-button {
  padding: 10px 15px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
}

/* Error message styling */
.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .login-container {
    padding: 10px;
  }
  .login-form {
    padding: 20px;
  }
}

</style>
