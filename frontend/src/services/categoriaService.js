import api from "./api";

export const findCategorias = async () => api.get("/categorias");

export const findCategoriaById = async (id) => api.get(`/categorias/${id}`);

export const addCategoria = async (payload) => api.post("/categorias", payload);

export const updateCategoria = async (id, payload) =>
  api.put(`/categorias/${id}`, payload);

export const deleteCategoria = async (id) => api.delete(`/categorias/${id}`);
