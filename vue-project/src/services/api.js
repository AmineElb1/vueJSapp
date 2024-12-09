import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchOrders = async (token) => {
  const response = await axios.get(`${API_URL}/orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data; // Retourneert de lijst met bestellingen
};

export const updateOrderStatus = async (orderId, status, token) => {
  const response = await axios.patch(
    `${API_URL}/orders/${orderId}`,
    { status },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const deleteOrderById = async (orderId, token) => {
  const response = await axios.delete(`${API_URL}/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
