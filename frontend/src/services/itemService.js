import api from "./api";

export const findItems = async () => api.get("/items");
export const findItemById = async (id) => api.get(`/items/${id}`);
export const findItemsByFiltro = async ({ bairro, categoria }) => {
  const params = new URLSearchParams();

  if (bairro) params.append("bairro", bairro);
  if (categoria) params.append("categoria", categoria);

  return api.get(`/items?${params.toString()}`);
};

export const addItem = async (payload) => api.post("/items", payload);
export const updateItem = async (id, payload) =>
  api.put(`/items/${id}`, payload);
export const deleteItem = async (id) => api.delete(`/items/${id}`);
