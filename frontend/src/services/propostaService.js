import api from "./api";

export const findProposals = async () => api.get("/propostas");
export const findProposalById = async (id) => api.get(`/propostas/${id}`);
export const addProposal = async (payload) => api.post("/propostas", payload);
export const deleteProposal = async (id) => api.delete(`/propostas/${id}`);
