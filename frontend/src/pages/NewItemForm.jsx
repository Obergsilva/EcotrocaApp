import React, { useState } from 'react';
import './NewItemForm.css';

const NovoItemForm = () => {
  const [formData, setFormData] = useState({
    id: 0,
    descricao: '',
    usuarioId: 0,
    bairro: '',
    categoriaId: 0,
    cidade: '',
    dataPublicacao: '',
    enderecoRetirada: '',
    estadoConservacao: '',
    status: '',
    titulo: '',
    urlImagem: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'foto') {
      setFormData({ ...formData, urlImagem: files[0] });
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
            <button type="button" className="btn-cancelar">Cancelar</button>
            <button type="submit" className="btn btn-success">Publicar Item</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NovoItemForm;
