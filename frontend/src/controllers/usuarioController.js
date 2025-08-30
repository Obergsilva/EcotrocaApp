module.exports = {
  criarUsuario: (req, res) => {
    
    res.json({ mensagem: 'Usuário criado com sucesso!' });
  },

  listarUsuarios: (req, res) => {
    
    res.json({ usuarios: [] });
  }
};
