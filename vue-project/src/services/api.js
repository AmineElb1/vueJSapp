import axios from "axios";

const API_URL = "https://jouw-api-url.com"; // Pas dit aan naar jouw backend-URL

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });
  return response.data; // Verwacht een token terug
};
