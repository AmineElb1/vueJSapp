import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data; // Verwacht een JWT-token terug
};

export const fetchOrders = async (token) => {
  const response = await axios.get(`${API_URL}/orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data; // Retourneert de lijst met bestellingen
};

export const updateOrderStatus = async (orderId, status, token) => {
  console.log("API URL:", `${API_URL}/orders/${orderId}`); // Controleer de URL
  console.log("API Status:", status); // Controleer de status die wordt verzonden

  try {
    const response = await axios.patch(
      `${API_URL}/orders/${orderId}`,
      { status },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response || error); // Controleer de volledige fout
    throw error;
  }
};



export const deleteOrderById = async (orderId, token) => {
  const response = await axios.delete(`${API_URL}/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
