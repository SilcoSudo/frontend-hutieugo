import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://api.hutieugo.id.vn/api',
  timeout: 10000, // Timeout 10 giây
});

// Thêm interceptor để xử lý lỗi toàn cục
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Network Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Thêm interceptor cho request (nếu cần token)
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // Giả sử token lưu trong localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default api;