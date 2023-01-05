import axios from 'axios';
import { BASE_URL } from '../constants/api';
import { getLocalStorage, removeLocalStorage } from '../utils/localStorage';

const api = axios.create({
  baseURL: BASE_URL.DEV,
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getLocalStorage('token');
    if (!accessToken) return config;
    config.headers = {
      'Content-type': 'application/json',
      authorization: `${accessToken}`,
    };
    return config;
  },
  (error) => {
    removeLocalStorage('token');
    alert('세션이 만료되었습니다. 다시 로그인해 주시기 바랍니다.');
    window.open('/signIn', '_self');
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 400 && error?.response?.data.details === 'Token is missing') {
      removeLocalStorage('token');
      alert('세션이 만료되었습니다. 다시 로그인해 주시기 바랍니다.');
      window.open('/signIn', '_self');
    }
    return Promise.reject(error);
  }
);
export default api;
