import React, { useState } from "react";
import "./NewItemForm.css";
import { addItem } from "../services/itemService";

const NovoItemForm = () => {
  const [formData, setFormData] = useState({
    id: 0,
    titulo: "",
    descricao: "",
    estadoConservacao: "",
    urlImagem: null,
    enderecoRetirada: "",
    bairro: "",
    cidade: "",
    status: "",
    usuarioId: 1,
    categoriaId: 1,
  });

  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "foto") {
      setFormData({ ...formData, urlImagem: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.titulo ||
      !formData.descricao ||
      !formData.estadoConservacao ||
      !formData.cidade ||
      !formData.bairro ||
      //!formData.urlImagem ||
      !formData.status
    )
      return alert("Por favor, preencha todos os campos.");

    console.log("Item registrado com sucesso");
    alert("Item criado com sucesso!");

    const payload = {
      titulo: formData.titulo,
      descricao: formData.descricao,
      estadoConservacao: formData.estadoConservacao,
      //urlImagem: formData.urlImagem,
      enderecoRetirada: formData.enderecoRetirada,
      bairro: formData.bairro,
      cidade: formData.cidade,
      usuarioId: formData.usuarioId,
      categoriaId: formData.categoriaId,
      status: formData.status,
    };

    console.log(payload);

    try {
      setSaving(true);
      addItem(payload);
      console.log("Item criado com sucesso!");
    } catch (error) {
      setError("Erro ao criar item. Tente novamente.");
      setSaving(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Cadastrar Novo Item</h2>
      <p>
        Logado como: <strong></strong>
      </p>

      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-left">
          <label>
            <strong>Foto do Item</strong>
            <br />
            <input type="file" name="foto" onChange={handleChange} />
            <div className="dica">
              Dicas: Boa iluminação, fundo neutro, item completo.
            </div>
          </label>
        </div>

        <div className="form-right">
          <label>
            Nome do Item* <br />
            <input
              type="text"
              name="titulo"
              placeholder="Ex: Camiseta Vintage Tamanho M"
              value={formData.titulo}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Descrição* <br />
            <textarea
              name="descricao"
              placeholder="Descreva o estado de conservação, tempo de uso..."
              value={formData.descricao}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Categoria* <br />
            <select
              name="categoriaId"
              value={formData.categoriaId}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma categoria</option>
              <option value="1">Eletrônicos</option>
              <option value="2">Livros</option>
              <option value="3">Roupas</option>
              <option value="4">Outros</option>
            </select>
          </label>

          <label>
            Cidade* <br />
            <input
              type="text"
              name="cidade"
              placeholder="Ex: Quixadá"
              value={formData.cidade}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Bairro* <br />
            <input
              type="text"
              name="bairro"
              placeholder="Ex: Carrascal"
              value={formData.bairro}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Estado de Conservação* <br />
            <input
              type="text"
              name="estadoConservacao"
              placeholder="Ex: Bom"
              value={formData.estadoConservacao}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Endereço da Retirada* <br />
            <input
              type="text"
              name="enderecoRetirada"
              placeholder="Ex: Rua X"
              value={formData.enderecoRetirada}
              onChange={handleChange}
              required
            />
          </label>

          <div className="form-buttons">
            <button type="button" className="btn-cancelar">
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleSubmit}
              disabled={saving}
            >
              Publicar Item{" "}
              {saving && (
                <span
                  className="spinner-border spinner-border-sm ms-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NovoItemForm;
