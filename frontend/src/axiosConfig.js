import axios from "axios";

// In production (Vercel), use the REACT_APP_API_URL env var.
// In development, use empty string so the proxy in package.json handles it.
const baseURL = process.env.REACT_APP_API_URL || "";

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default axios;
