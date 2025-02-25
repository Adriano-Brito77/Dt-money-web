import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Certifique-se de que está apontando para o backend correto
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
