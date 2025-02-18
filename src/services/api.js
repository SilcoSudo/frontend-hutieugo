import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error during login', error);
    throw error;
  }
};

export const register = async (email, password, name) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { email, password, name });
    return response.data;
  } catch (error) {
    console.error('Error during register', error);
    throw error;
  }
};