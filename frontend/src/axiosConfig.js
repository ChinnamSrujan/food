import axios from "axios";

// In production (Vercel), use the REACT_APP_API_URL env var.
// In development, use empty string so the proxy in package.json handles it.
const baseURL = process.env.REACT_APP_API_URL || "";

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

// Attach JWT token from localStorage to every request
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt_token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axios;
