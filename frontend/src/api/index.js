import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const startAnalysis = (requestId) => {
  return api.post(`/service-requests/${requestId}/analyze`);
};

export const checkAnalysisStatus = (requestId) => {
  return api.get(`/service-requests/${requestId}/status`);
};

export const submitServiceRequest = async (data) => {
  return await api.post('/service-requests', data);
};