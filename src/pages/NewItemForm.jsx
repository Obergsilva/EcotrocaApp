import React, { useState } from 'react';
import './NewItemForm.css';

const NovoItemForm = () => {
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    description: '',
    category: '',
    owner: '',
    neighborhood: '',
    city: '',
    interest: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'foto') {
      setFormData({ ...formData, foto: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
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
            <strong>Foto do Item</strong><br />
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
              name="nome"
              placeholder="Ex: Camiseta Vintage Tamanho M"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Descrição* <br />
            <textarea
              name="descricao"
              placeholder="Descreva o estado de conservação, tempo de uso..."
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Categoria* <br />
            <select
              name="categoria"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma categoria</option>
              <option value="Roupas">Roupas</option>
              <option value="Eletrônicos">Eletrônicos</option>
              <option value="Livros">Livros</option>
              <option value="Outros">Outros</option>
            </select>
          </label>

          <label>
            Cidade* <br />
            <input
              type="text"
              name="cidade"
              placeholder="Ex: Quixadá"
              value={formData.city}
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
              value={formData.neighborhood}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Interesses para Troca (opcional) <br />
            <input
              type="text"
              name="interesses"
              placeholder="Ex: Livros, Eletrônicos..."
              value={formData.interest}
              onChange={handleChange}
            />
          </label>

          <div className="form-buttons">
            <button type="button" className="btn-cancelar">Cancelar</button>
            <button type="submit" className="btn-publicar">Publicar Item</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NovoItemForm;
