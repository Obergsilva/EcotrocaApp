import React from "react";
import { useParams } from "react-router-dom";

const ProporTroca = () => {
  const { id } = useParams(); // pegar o id do item via rota (ex.: /propor/:id)

  // Aqui futuramente você buscará o item no backend
  // Por enquanto, dados mockados:
  const item = {
    id,
    title: "Roupas de Bebê",
    category: "Roupas",
    estadoConservacao: "Ótimo estado",
    bairro: "Centro",
    descricao:
      "Lote com 15 peças de roupas de bebê 0-6 meses. Inclui bodies, macacões, calças e blusas. Todas as peças foram bem cuidadas e estão em excelente estado.",
    owner: "Maria Santos",
    publishedDate: "07/01/2024",
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/767400/kit_roupas_de_bebe_38_pecas_enxoval_completo_menino_e_menina_945_1_231d581d1803b4220f6aeb58340f2ed8_20211125233351.jpg",
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Imagem */}
        <div className="col-md-6">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Informações */}
        <div className="col-md-6">
          <h2 className="mb-3">{item.title}</h2>
          <p className="text-muted mb-1"><strong>Categoria:</strong> {item.category}</p>
          <p className="text-muted mb-1"><strong>Estado de Conservação:</strong> {item.estadoConservacao}</p>
          <p className="text-muted mb-1"><strong>Bairro:</strong> {item.bairro}</p>

          <hr />

          <h5>Descrição</h5>
          <p>{item.descricao}</p>

          <p className="text-muted mb-1">
            <strong>Dono:</strong> {item.owner}
          </p>
          <p className="text-muted mb-3">
            <strong>Publicado em:</strong> {item.publishedDate}
          </p>

          <button className="btn btn-success btn-lg w-100">
            Propor troca
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProporTroca;
