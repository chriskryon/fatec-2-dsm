import axios, { type AxiosInstance } from 'axios';

const BASE_URL =
  'https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados';

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
