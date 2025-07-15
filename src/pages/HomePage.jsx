import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';

const HomePage = () => {
  const [items, setItems] = useState([{
      id: 0,
      title: '',
      description: '',
      category: '',
      owner: '',
      neighborhood: '',
      city: '',
      interest: '',
      imageUrl: '',
    }]);
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
    <div className="container-fluid my-1">
      {}
      <div className="row text-center mb-3 bg-success p-5">
        <div className="col-md-8 mx-auto">
          <h1 className="Display-4 fw-bold text-light"><strong>Conectando necessidades, transformando vidas.</strong></h1>
          <p className="lead text-light mb-5 ">
            No Ecotroca, o que você não usa mais tem muito valor para outra pessoa.
            Cadastre-se, encontre o que procura e faça trocas de forma simples e segura na sua comunidade.
          </p>
          <input type="text" className="form-control" placeholder="O que você está procurando?" />
        </div>
      </div>

      <div className="row mb-5 gx-3 align-items-center">
        <label className="col-md-auto col-form-label">Categoria:</label>
        <div className="col-md-3">
          <select className="form-select">
            <option value="">Todas</option>
            <option value="eletrônicos">Eletrônicos</option>
            <option value="móveis">Móveis</option>
            <option value="roupas">Roupas</option>
            <option value="brinquedos">Brinquedos</option>
          </select>
        </div>
        
        <label className="col-md-auto col-form-label">Localização:</label>
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="Digite o bairro..." />
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