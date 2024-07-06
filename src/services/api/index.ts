import axios from 'axios';
import {apiConfig} from './config';

const api = axios.create({
  baseURL: apiConfig.baseUrl,
  timeout: 10000,
});

export default api;
