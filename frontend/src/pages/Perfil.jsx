import React from "react";
import "./Perfil.css";
import { Link } from "react-router-dom";


const Perfil = () => {
  const user = {
    id: 1,
    name: "Ana",
    email: "ana@example.com",
    city: "Fortaleza-Ce",
    neighborhood: "Bairro Meireles",
    imageUrl: "https://img.myloview.com.br/fotomurais/desenho-de-rosto-de-mulher-bonita-700-148662415.jpg"
  };

  return (
    <div className="perfil-container">
      <h1 className="titulo">Meu Perfil</h1>

      <div className="perfil-card">
        <div className="usuario-info">
          <img className="avatar" src={user.imageUrl} alt={user.name}  />
          <div>
            <div className="nome">{user.name}</div>
            <div className="email">📍 {user.neighborhood},<br />{user.email}</div>
          </div>
        </div>
      </div>

      <div className="tabs">
        <button className="tab ativo">📦 Meus Itens (0)</button>
        <button className="tab">💬 Propostas (2)</button>
        <Link className="cadastrar-btn" to="/cadastrarItem">+ Cadastrar Novo Item</Link>
      </div>

      <div className="itens-area">
        <div className="nenhum-item">
          <div className="icone">📦</div>
          <p className="msg">Nenhum item cadastrado</p>
          <p className="sub-msg">Comece cadastrando seu primeiro item para troca.</p>
          <Link className="cadastrar-btn" to="/cadastrarItem">Cadastrar Item</Link>
        </div>
      </div>
    </div>
  );
};

export default Perfil;