import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100">
        <img
          src={item.urlImagem}
          className="card-img-top"
          alt={item.titulo}
          style={{ height: "180px", objectFit: "contain", padding: "10px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.titulo}</h5>
          <p className="card-text text-muted">{item.descricao}</p>
          <small className="text-muted">
            📍 {item.bairro} - {item.cidade}
          </small>
        </div>
        <div className="card-footer bg-transparent border-top-0">
          <Link to={`/items/${item.id}`} className="btn btn-success w-100">
            Detalhe do Item
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
