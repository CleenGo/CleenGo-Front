import axios from "axios";

export const http = axios.create({
  baseURL: process.env.VITE_BACKEND_URL || "http://localhost:3000",
  withCredentials: true,
});
