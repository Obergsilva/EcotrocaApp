import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import {
  findItems,
  findItemsByFiltro 
} from "../services/itemService";
import { findCategorias } from "../services/categoriaService";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [bairro, setBairro] = useState("");
  const [titulo, setTitulo] = useState("")

  useEffect(() => {
    fetchItems();
    fetchCategorias();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await findItems();
      setItems(response.data);
    } catch (error) {
      console.error("Erro ao buscar itens:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategorias = async () => {
    try {
      const response = await findCategorias();
      setCategorias(response.data);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  const handleSearch = async () => {
  setLoading(true);
  try {
    const response = await findItemsByFiltro({
      bairro,
      categoria: categoriaSelecionada,
      titulo
    });

    setItems(response.data);
  } catch (error) {
    console.error("Erro ao buscar itens com filtros:", error);
  } finally {
    setLoading(false);
  }
};

  const handleCategoriaChange = (e) => {
    setCategoriaSelecionada(e.target.value);
  };

  return (
    <div className="container-fluid my-1">
      <div className="row text-center mb-3 bg-success p-5">
        <div className="col-md-8 mx-auto">
          <h1 className="Display-4 fw-bold text-light">
            <strong>Conectando necessidades, transformando vidas.</strong>
          </h1>
          <p className="lead text-light mb-5">
            No Ecotroca, o que você não usa mais tem muito valor para outra
            pessoa. Cadastre-se, encontre o que procura e faça trocas de forma
            simples e segura na sua comunidade.
          </p>
          <input
            type="text"
            className="form-control"
            placeholder="O que você está procurando?"
            value={items.titulo}
            onChange={(e) => setTitulo(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>

      <div className="row mb-5 gx-3 align-items-center">
        <label className="col-md-auto col-form-label">Categoria:</label>
        <div className="col-md-3">
          <select
            name="categoriaId"
            value={categoriaSelecionada}
            onChange={handleCategoriaChange}
            required
          >
            <option value="">Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <label className="col-md-auto col-form-label">Localização:</label>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Digite o bairro..."
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
        </div>

        <div className="col-md-auto">
          <input
            type="button"
            className="btn btn-success"
            value="Buscar"
            onClick={handleSearch}
          />
        </div>
      </div>

      <div className="row">
        {loading ? (
          <p>Carregando itens...</p>
        ) : Array.isArray(items) && items.length > 0 ? (
          items.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <p>Nenhum item encontrado</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
