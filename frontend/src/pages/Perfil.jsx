import "./Perfil.css";
import userImage from "../assets/user.png";
import { findUserById } from "../services/userService";
import { findItemById } from "../services/itemService";
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
  const [hydratedProposals, setHydratedProposals] = useState([]);

  useEffect(() => {
    if (!user?.id) return;

    const hydrateProposals = async (proposals) => {
      const proposalPromises = proposals.map(async (proposal) => {
        try {
          const [itemOfertadoRes, itemDesejadoRes] = await Promise.all([
            findItemById(proposal.itemOfertadoId),
            findItemById(proposal.itemDesejadoId),
          ]);
          return {
            ...proposal,
            itemOfertado: itemOfertadoRes.data,
            itemDesejado: itemDesejadoRes.data,
            autor: user,
          };
        } catch (error) {
          console.error(
            `Erro ao carregar detalhes da proposta ${proposal.id}:`,
            error
          );
          return null;
        }
      });
      const resolvedProposals = await Promise.all(proposalPromises);
      setHydratedProposals(resolvedProposals.filter((p) => p !== null));
      setLoading(false);
    };

    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const response = await findUserById(user.id);
        const userData = response.data;
        setItens(userData.itens);
        await hydrateProposals(userData.propostas);
      } catch (error) {
        console.error("Erro ao buscar dados do perfil:", error);
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [user?.id, user]);

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
          💬 Propostas ({hydratedProposals.length})
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
          ) : hydratedProposals.length > 0 ? (
            hydratedProposals.map((proposal) => (
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
