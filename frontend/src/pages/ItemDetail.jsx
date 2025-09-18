import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { findItemById } from "../services/itemService";
import {findUserById} from "../services/userService"
import { useAuth } from "../context/authProvider";
import { addProposal } from "../services/propostaService";
import "./ItemDetail.css";

const ItemDetail = () => {
  const { id } = useParams(); //ID do item
  const { user } = useAuth()
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [meusItens, setMeusItens] = useState([]);
  const [itemSelecionado, setItemSelecionado] = useState("");

  useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await findItemById(id);
          setItems(response.data);
          
        } catch (error) {
          console.error("Erro ao buscar itens:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchItems();
    }, []);

  const handleProposta = async () => {
    try {
      const response = await findUserById(user.id);
      
      setMeusItens(response.data.itens);
      
      setShowModal(true);
    } catch (error) {
      console.error("Erro ao buscar seus itens:", error);
    }
  };

  const enviarProposta = async (e) => {
    console.log(id)
    console.log(meusItens)
    e.preventDefault();
    if (meusItens.some((item) => item.id === parseInt(id))) {
      alert("Escolha um item de outra pessoa para trocar");
    return;
}
    
    const propostaPayload = {
      mensagem: "Gostaria de trocar esse item?",
      autorId: parseInt(user.id),
      itemOfertadoId: parseInt(itemSelecionado),
      itemDesejadoId: parseInt(id),
    };
    try {
      await addProposal(propostaPayload)
      alert("Proposta enviada com sucesso!");
      setShowModal(false);
    } catch (error) {
      console.error("Erro ao enviar proposta:", error);
    }
  };



  const handleBack = () => {
    navigate('/');
  };

  if (loading) {
    return <div className="loading">Carregando item...</div>;
  }

  if (error) {
    return <div className="error">Erro: {error}</div>;
  }

  if (!items) {
    return <div className="error">Item não encontrado.</div>;
  }


  return (
    <div className="item-container">
      <button className="voltar" onClick={handleBack}>← Voltar para busca</button>

      <div className="item-content">
        <img
          src={items.urlImagem}
          alt={items.titulo}
          className="item-imagem"
        />

        <div className="item-info">
          <h1 className="item-titulo">{items.titulo}</h1>

          <div className="tags">
            {items.estadoConservacao && <span className="tag-estado">{items.estadoConservacao}</span>}
          </div>

          <div className="localizacao">📍 {items.bairro}, {items.cidade}</div>

          <h3>Descrição</h3>
          <p className="descricao">
            {items.descricao}
          </p>

          <div className="autor-card">
            <div className="autor-avatar">👤</div>
            <div>
              <strong>{items.dono.nomeCompleto || 'Usuário'}</strong>
              <div className="publicado">Publicado em {items.dataPublicacao || 'Data não disponível'}</div>
            </div>
          </div>

          <button className="propor-btn" onClick={handleProposta}>💬 Propor Troca</button>
        </div>
      </div>
      {showModal && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Selecione um item para troca</h2>
          <select
            value={itemSelecionado}
            onChange={(e) => setItemSelecionado(e.target.value)}
          >
            <option value="">Selecione</option>
            {meusItens.map((item) => (
              <option key={item.id} value={item.id}>
                {item.titulo}
              </option>
            ))}
          </select>
          <div className="modal-actions">
            <button onClick={enviarProposta} disabled={!itemSelecionado}>
              Enviar Proposta
            </button>
            <button onClick={() => setShowModal(false)}>Cancelar</button>
          </div>
        </div>
      </div>
    )}

    </div>
  );
};

export default ItemDetail;