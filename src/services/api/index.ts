// src/services/index.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hook.integromat.com',
  timeout: 10000,
});

export default api;
