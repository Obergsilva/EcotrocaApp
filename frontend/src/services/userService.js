import api from './api';

export const findUsers = async () => api.get('/users/');
export const findUserById = async (id) => api.get(`/users/${id}`);
export const addUser = async (payload) => api.post('/users/', payload);
export const updateUser = async (id, payload) => api.put(`/users/${id}`, payload);
export const deleteUser = async (id) => api.delete(`/users/${id}`);
