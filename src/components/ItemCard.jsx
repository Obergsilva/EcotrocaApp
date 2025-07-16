import React from 'react';
import { Link } from "react-router-dom";


const ItemCard = ({ item }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100">
        <img src={item.imageUrl} className="card-img-top" alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text text-muted">{item.description}</p>
          <small className="text-muted">{item.neighborhood} {item.city}</small>
        </div>
        <div className="card-footer bg-transparent border-top-0">
          <Link to={`/item/${item.id}`} className="btn btn-success w-100">Detalhe do Item</Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;