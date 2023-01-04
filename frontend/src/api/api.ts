import axios from 'axios';
import { BASE_URL } from '../constants/api';
import { getLocalStorage } from '../utils/localStorage';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    alert('세션이 만료되었습니다. 다시 로그인해 주시기 바랍니다.');
    navigate('/signIn');
  }
);

export default api;
