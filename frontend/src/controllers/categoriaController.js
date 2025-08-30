module.exports = {
  criarCategoria: (req, res) => {
    res.json({ mensagem: 'Categoria criada com sucesso!' });
  },

  listarCategorias: (req, res) => {
    res.json({ categorias: [] });
  }
};
