module.exports = {
  criarItem: (req, res) => {
    res.json({ mensagem: 'Item criado com sucesso!' });
  },

  listarItens: (req, res) => {
    res.json({ itens: [] });
  }
};
