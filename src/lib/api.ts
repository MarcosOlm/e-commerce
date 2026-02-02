import { useAuth } from "@/stores/auth.store";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuth.getState().setIsUserLogin(false)
      return
    }
    return Promise.reject(error)
  },
);
