import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:3001/item",
  headers: {
    post: {
      "Access-Control-Allow-Origin": true,
    },
  },
});
