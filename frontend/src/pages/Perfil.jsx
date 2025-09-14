import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Perfil.css";
import userImage from "../assets/user.png";
import { findUserById } from "../services/userService"; // Função que busca usuário no backend
import ItemCard from "../components/ItemCard";

const Perfil = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: null,
    nome: "",
    email: "",
    cidade: "",
    bairro: "",
    imageUrl: userImage,
    itens: [],
    propostas: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem("userId"); // supondo que você salva o ID do usuário ao fazer login
        if (!userId) {
          navigate("/login"); // se não estiver logado, redireciona
          return;
        }

        const response = await findUserById(userId);
        const data = response.data;
        setUser({
          id: data.id,
          nome: data.nomeCompleto,
          email: data.email,
          cidade: data.cidade,
          bairro: data.bairro,
          imageUrl: data.imageUrl || userImage,
          itens: data.itens || [],
          propostas: data.propostas || [],
        });
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div className="perfil-container">
      <h1 className="titulo">Meu Perfil</h1>

      <div className="perfil-card">
        <div className="usuario-info">
          <img className="avatar" src={user.imageUrl} alt={user.nome} />
          <div>
            <div className="nome">{user.nome}</div>
            <div className="email">
              📍 {user.bairro},<br />
              {user.email}
            </div>
          </div>
        </div>
      </div>

      <div className="tabs">
        <button className="tab ativo">
          📦 Meus Itens ({user.itens.length})
        </button>
        <button className="tab">💬 Propostas ({user.propostas.length})</button>
        <Link className="cadastrar-btn" to="/cadastrarItem">
          + Cadastrar Novo Item
        </Link>
      </div>

      <div className="itens-area">
        <div
          className="nenhum-item"
          style={{ display: user.itens.length ? "none" : "block" }}
        >
          <div className="icone">📦</div>
          <p className="msg">Nenhum item cadastrado</p>
          <p className="sub-msg">
            Comece cadastrando seu primeiro item para troca.
          </p>

          <Link className="cadastrar-btn" to="/cadastrarItem">
            Cadastrar Item
          </Link>
        </div>
        <div className="row">
          {loading ? (
            <p>Carregando itens...</p>
          ) : (
            user.itens.map((item) => <ItemCard key={item.id} item={item} />)
          )}
        </div>
      </div>

      <div className="sobre-area">
        <div className="sobre-card"></div>
      </div>
    </div>
  );
};

export default Perfil;
