<template>
    <div class="home-container">
      <Sidebar />
      <div class="content">
        <!-- Router View toont de inhoud van subroutes (zoals OrdersList) -->
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from "../components/Sidebar.vue"; // Importeer de Sidebar-component
  
  export default {
    name: "HomeView",
    components: {
      Sidebar,
    },
  };
  </script>
  
  <style>
  .home-container {
    display: flex;
  }
  
  .sidebar {
    width: 250px;
    background-color: #f4f4f4;
    height: 100vh;
    padding: 10px;
  }
  
  .content {
    flex-grow: 1;
    padding: 20px;
  }
  </style>
  