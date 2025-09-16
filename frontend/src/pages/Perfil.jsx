import "./Perfil.css";
import userImage from "../assets/user.png";
import { findUserById } from "../services/userService";
import { useAuth } from "../context/authProvider";
import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import { Link } from "react-router-dom";

const Perfil = () => {
  const { user, token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("itens");
  const [proposals, setProposals] = useState([]);
  const [itens, setItens] = useState([]);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchItens = async () => {
      setLoading(true);
      try {
        const response = await findUserById(user.id);

        setItens(response.data.itens);
        setProposals(response.data.propostas);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItens();
  }, [user?.id]);

  return (
    <div className="perfil-container">
      <h1 className="titulo">Meu Perfil</h1>
      <div className="perfil-card">
        <div className="usuario-info">
          <img
            className="avatar"
            src={user.imageUrl || userImage}
            alt={user.nomeCompleto}
          />
          <div>
            <div className="nome">{user.nomeCompleto}</div>
            <div className="email">
              📍 {user.bairro} - {user.cidade}
              <br />
              {user.email}
            </div>
          </div>
        </div>
      </div>
      {/* O resto do seu componente continua igual */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "itens" ? "ativo" : ""}`}
          onClick={() => setActiveTab("itens")}
        >
          📦 Meus Itens ({itens.length})
        </button>
        <button
          className={`tab ${activeTab === "propostas" ? "ativo" : ""}`}
          onClick={() => setActiveTab("propostas")}
        >
          💬 Propostas ({proposals.length})
        </button>
        <Link className="cadastrar-btn" to="/cadastrarItem">
          + Cadastrar Novo Item
        </Link>
      </div>
      <div className="itens-area">
        <div
          className="nenhum-item"
          style={{ display: itens.length ? "none" : "block" }}
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
            itens.map((item) => <ItemCard key={item.id} item={item} />)
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
