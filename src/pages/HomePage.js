import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch('http://localhost:3001/items')
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Houve um erro ao buscar os itens:", error);
        setLoading(false);
      });
  }, []); 

  return (
    <div className="container my-5">
      {}
      <div className="row text-center mb-5">
        <div className="col-md-8 mx-auto">
          <h1 className="display-4">Conectando necessidades, transformando vidas.</h1>
          <p className="lead">
            No Ecotroca, o que você não usa mais tem muito valor para outra pessoa.
            Cadastre, encontre e troque objetos de forma simples e segura na sua comunidade.
          </p>
        </div>
      </div>

      {}
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input type="text" className="form-control" placeholder="O que você está procurando?" />
        </div>
      </div>

      {}
      <div className="row">
        {loading ? (
          <p>Carregando itens...</p>
        ) : (
          items.map(item => <ItemCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default HomePage;