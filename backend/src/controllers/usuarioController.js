const {getUsuarios} = require('../models/usuarioModel');

const listarUsuarios = async (req, res) => {
  try{
    const usuarios = await getUsuarios();
    res.status(200).json({ usuarios });
} catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
}

  


module.exports = { listarUsuarios };
