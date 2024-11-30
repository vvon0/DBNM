import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const submitServiceRequest = (formData) => {
  return api.post('/service-requests', formData);
};