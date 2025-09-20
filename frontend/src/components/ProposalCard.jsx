import React from "react";
import { Link } from "react-router-dom";
// Adicione um arquivo CSS para estilização customizada se desejar
import "./ProposalCard.css"; 

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
    case "CANCELADA":
      return "bg-secondary";
    default:
      return "bg-secondary";
  }
};

const ProposalCard = ({ proposal }) => {
  const { status, itemOfertado, itemDesejado, autor, dataProposta } = proposal;

  return (
    <div className="card shadow-sm mb-4 border-0 rounded-3 proposal-card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h5 className="card-title mb-2 fw-semibold text-success">
              {autor?.nomeCompleto || "Usuário desconhecido"} enviou uma proposta:
            </h5>
          </div>

          {/* Status da proposta */}
          <div>
            <span className={`badge ${getStatusBadgeClass(status)} px-3 py-2`}>
              {status}
            </span>
          </div>
        </div>

        {/* Mini cards dos itens */}
        <div className="row">
          {/* Item desejado */}
          <div className="col-md-6 mb-3">
            <div className="card h-100 border-danger">
              <div className="card-body text-center d-flex flex-column justify-content-between">
                <div>
                  <h6 className="fw-bold text-danger">Você Entrega</h6>
                  {itemDesejado?.urlImagem && (
                    <img
                      src={itemDesejado.urlImagem}
                      alt={itemDesejado.titulo}
                      className="img-fluid rounded my-2 proposal-item-img"
                    />
                  )}
                </div>
                <Link to={`/items/${itemDesejado?.id}`} className="text-decoration-none text-danger">
                  <p className="mb-1 fw-bold">{itemDesejado?.titulo || "Item indisponível"}</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Item ofertado */}
          <div className="col-md-6 mb-3">
            <div className="card h-100 border-success">
              <div className="card-body text-center d-flex flex-column justify-content-between">
                <div>
                  <h6 className="fw-bold text-success">Você Recebe</h6>
                  {itemOfertado?.urlImagem && (
                     <img
                      src={itemOfertado.urlImagem}
                      alt={itemOfertado.titulo}
                      className="img-fluid rounded my-2 proposal-item-img" 
                    />
                  )}
                </div>
                <Link to={`/items/${itemOfertado?.id}`} className="text-decoration-none text-success">
                  <p className="mb-1 fw-bold">{itemOfertado?.titulo || "Item indisponível"}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="card-footer bg-light d-flex justify-content-between align-items-center">
        <small className="text-muted">📅 {formatDate(dataProposta)}</small>

        {status === "PENDENTE" && (
          <div>
            <button className="btn btn-sm btn-outline-success me-2">✅ Aceitar</button>
            <button className="btn btn-sm btn-outline-danger">❌ Recusar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProposalCard;