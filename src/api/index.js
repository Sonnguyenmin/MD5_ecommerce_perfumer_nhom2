import axios from "axios";

export const BASE_URL = axios.create({
  baseURL: "http://localhost:8080/api.example.com/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const formAxios = axios.create({
  baseURL: "http://localhost:8080/api.example.com/v1/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
