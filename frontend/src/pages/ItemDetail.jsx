import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/items/${id}`);
        
        if (!response.ok) {
          throw new Error('Item não encontrado');
        }
        
        const data = await response.json();
        setItem(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchItem();
    }
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  if (loading) {
    return <div className="loading">Carregando item...</div>;
  }

  if (error) {
    return <div className="error">Erro: {error}</div>;
  }

  if (!item) {
    return <div className="error">Item não encontrado.</div>;
  }


  return (
    <div className="item-container">
      <button className="voltar" onClick={handleBack}>← Voltar para busca</button>

      <div className="item-content">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="item-imagem"
        />

        <div className="item-info">
          <h1 className="item-titulo">{item.title}</h1>

          <div className="tags">
            <span className="tag-categoria">{item.category}</span>
            {item.condition && <span className="tag-estado">{item.condition}</span>}
          </div>

          <div className="localizacao">📍 {item.neighborhood}, {item.city}</div>

          <h3>Descrição</h3>
          <p className="descricao">
            {item.description}
          </p>

          <div className="autor-card">
            <div className="autor-avatar">👤</div>
            <div>
              <strong>{item.owner || 'Usuário'}</strong>
              <div className="publicado">Publicado em {item.publishedDate || 'Data não disponível'}</div>
            </div>
          </div>

          <button className="propor-btn">💬 Propor Troca</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;