<template>
  <div>
    <h1>Welcome to Home</h1>
    <p>You are successfully logged in!</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>
