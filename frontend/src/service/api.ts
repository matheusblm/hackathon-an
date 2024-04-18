import axios from "axios";
import { apiHost } from "./host";

export const api = axios.create({
  baseURL: `https://${apiHost}/`,
  headers: {
    "Content-Type": "application/json",
  },
});
