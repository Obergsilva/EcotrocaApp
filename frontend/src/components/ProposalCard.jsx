import React from "react";
import { Link } from "react-router-dom";

// Função para formatar a data para o padrão brasileiro (dd/mm/yyyy)
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
};

// Função para determinar a cor do badge de status
const getStatusBadgeClass = (status) => {
  switch (status) {
    case "PENDENTE":
      return "bg-warning text-dark";
    case "ACEITA":
      return "bg-success";
    case "RECUSADA":
      return "bg-danger";
    default:
      return "bg-secondary";
  }
};

const ProposalCard = ({ proposal }) => {
  const { status, itemOfertado, itemDesejado, autor, dataProposta } = proposal;

  return (
    // O card principal, com uma sombra leve
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        {/* Usamos flexbox para alinhar o conteúdo principal à esquerda e o status à direita */}
        <div className="d-flex justify-content-between align-items-start">
          {/* Parte Esquerda: Detalhes da Proposta */}
          <div>
            <h5 className="card-title mb-1">
              Proposta para:{" "}
              <Link to={`/items/${itemDesejado?.id}`}>
                {itemDesejado?.titulo || "Item indisponível"}
              </Link>
            </h5>
            <p className="card-text mb-1">
              <small className="text-muted">
                De: {autor?.nomeCompleto || "Usuário desconhecido"}
              </small>
            </p>
            <p className="card-text">
              Oferece em troca:{" "}
              <Link to={`/item/${itemOfertado?.id}`}>
                {itemOfertado?.titulo || "Item indisponível"}
              </Link>
            </p>
          </div>

          {/* Parte Direita: Status da Proposta */}
          <div>
            <span className={`badge ${getStatusBadgeClass(status)}`}>
              {status}
            </span>
          </div>
        </div>
      </div>

      {/* Rodapé do Card */}
      <div className="card-footer bg-light d-flex justify-content-between align-items-center">
        <small className="text-muted">Data: {formatDate(dataProposta)}</small>

        {/* Mostra os botões apenas se a proposta estiver pendente */}
        {status === "PENDENTE" && (
          <div>
            <button className="btn btn-success btn-sm me-2">Aceitar</button>
            <button className="btn btn-danger btn-sm">Recusar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProposalCard;
