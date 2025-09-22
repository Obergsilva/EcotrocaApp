import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewItemForm.css";
import { addItem } from "../services/itemService";
import { findCategorias } from "../services/categoriaService";

const NovoItemForm = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user?.id);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    estadoConservacao: "",
    urlImagem: "",
    enderecoRetirada: "",
    bairro: "",
    cidade: "",
    status: "DISPONIVEL",
    usuarioId: user?.id || null,
    categoriaId: "",
  });

  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const loadCategorias = async () => {
      try {
        const res = await findCategorias();
        setCategorias(res.data); // popula o select
      } catch (err) {
        console.error("Erro ao carregar categorias", err);
      }
    };
    loadCategorias();
  }, []);

  // Converte a imagem para base64
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Limite de 500KB para evitar banco pesado
    if (file.size > 1000 * 1024) {
      alert("Imagem muito grande! Máximo de 1MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        urlImagem: reader.result, // base64
      }));
    };
    reader.readAsDataURL(file);
  };

  // Atualiza campos de texto/select
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.titulo ||
      !formData.descricao ||
      !formData.estadoConservacao ||
      !formData.cidade ||
      !formData.bairro ||
      !formData.categoriaId
    ) {
      return alert("Por favor, preencha todos os campos obrigatórios.");
    }

    try {
      setSaving(true);
      await addItem({
        ...formData,
        categoriaId: parseInt(formData.categoriaId),
        usuarioId: parseInt(formData.usuarioId),
      });
      alert("Item criado com sucesso!");
      navigate("/perfil");
    } catch (err) {
      console.error(err);
      setError("Erro ao criar item. Tente novamente.");
      setSaving(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Cadastrar Novo Item</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-left">
          <label>
            <strong>Foto do Item</strong>
            <br />
            <input type="file" name="foto" onChange={handleFileChange} />
            <div className="dica">
              Dicas: Boa iluminação, fundo neutro, item completo.
            </div>
          </label>
          {formData.urlImagem && (
            <img
              src={formData.urlImagem}
              alt="Prévia"
              className="preview-img"
            />
          )}
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
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nome}
                </option>
              ))}
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
            <button
              type="button"
              className="btn-cancelar"
              onClick={() => navigate("/perfil")}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-success"
              disabled={saving}
            >
              {saving ? "Salvando..." : "Publicar Item"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NovoItemForm;
