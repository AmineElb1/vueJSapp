<template>
    <div class="sidebar">
      <h3>Sidebar</h3>
      <ul>
        <li><router-link to="/home">Dashboard</router-link></li>
        <li><router-link to="/home/orders">Orders</router-link></li>
        <li><router-link to="/home/change-password">Change Password</router-link></li>
        <li @click="logout">Logout</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem("token"); // Verwijder het token
        this.$router.push("/"); // Navigeer naar de loginpagina
      },
    },
  };
  </script>
  
  <style>
  .sidebar {
    padding: 20px;
    background-color: #2c3e50;
    color: white;
    height: 100vh;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar ul li {
    margin: 15px 0;
    cursor: pointer;
  }
  
  .sidebar ul li a {
    color: white;
    text-decoration: none;
  }
  
  .sidebar ul li:hover {
    text-decoration: underline;
  }
  </style>
  