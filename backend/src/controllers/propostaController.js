module.exports = {
  criarProposta: (req, res) => {
    res.json({ mensagem: 'Proposta criada com sucesso!' });
  },

  listarPropostas: (req, res) => {
    res.json({ propostas: [] });
  }
};
