import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// Função para obter o token do localStorage
const getToken = () => {
  return localStorage.getItem('token');
};
const getId = () => {
  return localStorage.getItem('userId')
}


// Adiciona um interceptor de requisição para incluir o token JWT no cabeçalho Authorization
api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  // Retorna a promise rejeitada se ocorrer um erro
  return Promise.reject(error);
});

export { api};
