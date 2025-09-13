const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findUserByEmail, addUser } = require("../models/userModel");

function signToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      nomeCompleto: user.nomeCompleto,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
  );
}

const register = async (req, res) => {
  const { nomeCompleto, email, senha, cidade, bairro } = req.body;

  if (!nomeCompleto || !email || !senha || !cidade || !bairro) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return res.status(409).json({ error: "Email já cadastrado" });
  }

  const hashedPassword = await bcrypt.hash(senha, 10);

  const newUser = await addUser(
    nomeCompleto,
    email,
    hashedPassword,
    cidade,
    bairro
  );
  const token = signToken(newUser);

  return res
    .status(201)
    .json({ token, user: { id: newUser.id, email: newUser.email } });
};

const login = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: "Email e senha são obrigatórios" });
  }

  const user = await findUserByEmail(email);

  if (!user || !user.senhaHash) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  const passwordMatch = await bcrypt.compare(senha, user.senhaHash);
  if (!passwordMatch) {
    return res.status(401).json({ error: "Senha incorreta" });
  }

  const token = signToken(user);

  return res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      nomeCompleto: user.nomeCompleto,
    },
  });
};

module.exports = {
  register,
  login,
};
