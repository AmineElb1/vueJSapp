<template>
    <div class="order-list">
      <h1>Bestellingen</h1>
      <table>
        <thead>
          <tr>
            <th>Klantnaam</th>
            <th>E-mailadres</th>
            <th>Adres</th>
            <th>Configuratie</th>
            <th>Status</th>
            <th>Acties</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order._id">
            <td>{{ order.customerName }}</td>
            <td>{{ order.email }}</td>
            <td>{{ order.address }}</td>
            <td>{{ JSON.stringify(order.configuration) }}</td>
            <td>
              <select v-model="order.status" @change="updateOrder(order)">
                <option value="new">Nieuw</option>
                <option value="processing">In behandeling</option>
                <option value="completed">Voltooid</option>
                <option value="cancelled">Geannuleerd</option>
              </select>
            </td>
            <td>
              <button @click="deleteOrder(order._id)">Verwijderen</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { fetchOrders, updateOrderStatus, deleteOrderById } from "@/services/api";
  
  export default {
    data() {
      return {
        orders: [], // Hier komen de opgehaalde bestellingen
      };
    },
    async mounted() {
      try {
        // Haal de token uit localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found, please log in.");
        }
        this.orders = await fetchOrders(token); // Haal de bestellingen op
      } catch (error) {
        console.error("Error fetching orders:", error);
        this.$router.push("/"); // Redirect naar login als er een fout is
      }
    },
    methods: {
        async updateOrder(order) {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found, please log in.");
    }
    console.log("Order ID being sent:", order._id); // Debugging
    console.log("Order Status being sent:", order.status); // Debugging

    await updateOrderStatus(order._id, order.status, token);
    alert("Orderstatus succesvol bijgewerkt!");
  } catch (error) {
    console.error("Error updating order status:", error.response || error);
    alert("Fout bij het bijwerken van de orderstatus.");
  }
}
,
      async deleteOrder(orderId) {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            throw new Error("No token found, please log in.");
          }
          await deleteOrderById(orderId, token);
          this.orders = this.orders.filter(order => order._id !== orderId);
          alert("Bestelling succesvol verwijderd!");
        } catch (error) {
          console.error("Error deleting order:", error);
          alert("Fout bij het verwijderen van de bestelling.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .order-list {
    padding: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f4f4f4;
  }
  </style>
  