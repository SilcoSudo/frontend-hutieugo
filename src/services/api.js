import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://api.hutieugo.id.vn/api';

export const loginUser = async (email, password) => {
  return axios.post(`${API_URL}/users/login`, { email, password });
};

export const registerUser = async (email, password, username) => {
  return axios.post(`${API_URL}/users/register`, { email, password, username });
};
