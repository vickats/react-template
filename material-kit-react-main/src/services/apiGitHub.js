import axios from 'axios';

const apiGitHub = axios.create({
  baseURL: 'https://api.github.com',
});

apiGitHub.interceptors.request.use(async (config) => {
  // Declaramos um token manualmente para teste.
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9';

  if (token) {
    apiGitHub.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiGitHub;
