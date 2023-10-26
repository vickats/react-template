import axios from 'axios';

const apiSwapi = axios.create({
  baseURL: 'https://swapi.dev/api',
});

apiSwapi.interceptors.request.use(async (config) => {
  // Declaramos um token manualmente para teste.
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9';

  if (token) {
    apiSwapi.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiSwapi;
