import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { BASE_URL, REQUEST_TIMEOUT } from '../const';
import { getToken } from './token';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }

      return config;
    }
  );

  return api;
};
