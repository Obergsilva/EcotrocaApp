import "./Perfil.css";
import userImage from "../assets/user.png";
import { findUserById } from "../services/userService";
import { useAuth } from "../context/authProvider";
import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import ProposalCard from "../components/ProposalCard";
import { Link } from "react-router-dom";

const Perfil = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("itens");
  const [itens, setItens] = useState([]);
  const [receivedProposals, setReceivedProposals] = useState([]);

  useEffect(() => {
    if (!user?.id) return;

    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const response = await findUserById(user.id);
        const userData = response.data;

        // itens do usuário
        setItens(userData.itens);

        // juntar todas as propostas recebidas nos itens do usuário
        const proposals = userData.itens.flatMap(
          (item) => item.propostasDesejadas || []
        );

        setReceivedProposals(proposals);
      } catch (error) {
        console.error("Erro ao buscar dados do perfil:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [user?.id]);

  if (!user) {
    return <div>Carregando perfil...</div>;
  }

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

      {/* Botões para controlar as abas */}
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
          💬 Propostas ({receivedProposals.length})
        </button>
        <Link className="cadastrar-btn" to="/cadastrarItem">
          + Cadastrar Novo Item
        </Link>
      </div>

      {/* Container que mostra o conteúdo da aba ativa */}
      <div className="conteudo-abas mt-4">
        {/* Seção Meus Itens */}
        <div style={{ display: activeTab === "itens" ? "block" : "none" }}>
          {loading ? (
            <p>Carregando itens...</p>
          ) : itens.length > 0 ? (
            <div className="row">
              {itens.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="nenhum-item text-center">
              <div className="icone" style={{ fontSize: "3rem" }}>
                📦
              </div>
              <p className="msg fs-5">Nenhum item cadastrado</p>
              <p className="sub-msg text-muted">
                Comece cadastrando seu primeiro item para troca.
              </p>
              <Link className="btn btn-success mt-3" to="/cadastrarItem">
                Cadastrar Item
              </Link>
            </div>
          )}
        </div>

        {/* Seção Propostas */}
        <div style={{ display: activeTab === "propostas" ? "block" : "none" }}>
          {loading ? (
            <p>Carregando propostas...</p>
          ) : receivedProposals.length > 0 ? (
            receivedProposals.map((proposal) => (
              <ProposalCard key={proposal.id} proposal={proposal} />
            ))
          ) : (
            <div className="nenhum-item text-center">
              <div className="icone" style={{ fontSize: "3rem" }}>
                💬
              </div>
              <p className="msg fs-5">Nenhuma proposta recebida</p>
              <p className="sub-msg text-muted">
                Quando alguém se interessar por um item seu, a proposta
                aparecerá aqui.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
