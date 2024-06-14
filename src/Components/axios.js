// components/axios.js
import axios from 'axios';

console.log("Environment Mode:", import.meta.env.MODE); // This will help us debug

const baseURL = import.meta.env.MODE === 'production' 
  ? "https://back-end-ctp2.onrender.com"
  : "http://localhost:5000";

console.log("Base URL:", baseURL); // This will help us debug

const instance = axios.create({
  baseURL
});

export default instance;
