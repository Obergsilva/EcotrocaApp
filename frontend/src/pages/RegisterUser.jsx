import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./RegisterUser.css";
import { addUser } from "../services/userService.js";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    nomeCompleto: "",
    email: "",
    senha: "",
    cidade: "",
    bairro: "",
    confirmarSenha: "",
  });

  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    if (
      !form.nomeCompleto ||
      !form.email ||
      !form.cidade ||
      !form.bairro ||
      !form.senha ||
      !form.confirmarSenha
    )
      return alert("Por favor, preencha todos os campos.");
    console.log("Usuário registrado com sucesso");
    alert("Conta criada com sucesso!");
    navigate("/login");

    const payload = {
      nomeCompleto: form.nomeCompleto,
      email: form.email,
      senha: form.senha,
      cidade: form.cidade,
      bairro: form.bairro,
    };

    try {
      setSaving(true);
      addUser(payload);
    } catch (error) {
      setError("Erro ao criar conta. Tente novamente.");
      setSaving(false);
    }
  };

  return (
    <div className="register-page">
      <div className="container-register my-4">
        <h1 className="Heading-5 text-left mb-2">Criar Conta</h1>
        {error && <p className="alert alert-danger">{error}</p>}
        <p className="Heading-5 text-left mb-4">
          Preencha os dados abaixo para criar sua conta.
        </p>
        <p className="Heading-5 text-left">
          <strong>Nome Completo</strong>
        </p>
        <form onSubmit={handleSubmit} className="row g-3">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Seu nome"
            name="nomeCompleto"
            value={form.nomeCompleto}
            onChange={handleChange}
            required
          />

          <p className="Heading-5 text-left">
            <strong>Email</strong>
          </p>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="seu@email.com"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <div className="row mb-2">
            <div className="col-md-6">
              <p className="Heading-5 text-left">
                <strong>Cidade</strong>
              </p>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Sua cidade"
                name="cidade"
                value={form.cidade}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <p className="Heading-5 text-left">
                <strong>Bairro</strong>
              </p>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Seu bairro"
                name="bairro"
                value={form.bairro}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <p className="Heading-5 text-left">
            <strong>Senha</strong>
          </p>
          <input
            type="password"
            className="form-control mb-3"
            placeholder="********"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            required
          />
          <p className="Heading-5 text-left">
            <strong>Confirmar Senha</strong>
          </p>
          <input
            type="password"
            className="form-control mb-3"
            placeholder="********"
            name="confirmarSenha"
            value={form.confirmarSenha}
            onChange={handleChange}
            required
          />

          <button
            className="btn btn-success w-100"
            onClick={handleSubmit}
            disabled={saving}
          >
            <strong>Criar Conta</strong>
            {saving && (
              <span
                className="spinner-border spinner-border-sm ms-2"
                role="status"
                aria-hidden="true"
              ></span>
            )}
          </button>

          <p className="text-center mt-3">
            Já tem uma conta?{" "}
            <a href="/login" className="text-success">
              Faça login
            </a>
          </p>
          <p className="text-center mt-3">
            <a href="/" className="text-success">
              {" "}
              Voltar para a página inicial
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
