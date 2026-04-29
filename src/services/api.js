import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Função para obter o token do localStorage
const getToken = () => {
  return localStorage.getItem('token');
};

const getId = () => {
  return localStorage.getItem('userId');
};

// Interceptor
api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export { api };