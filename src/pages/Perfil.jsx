import React from "react";
import "./Perfil.css";
import { Link } from "react-router-dom";

const Perfil = () => {
  return (
    <div className="perfil-container">
      <div className="voltar">← Voltar</div>
      <h1 className="titulo">Meu Perfil</h1>

      <div className="perfil-card">
        <div className="usuario-info">
          <div className="avatar">👤</div>
          <div>
            <div className="nome">Usuário</div>
            <div className="email">📍 ,<br />erika@gmail</div>
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