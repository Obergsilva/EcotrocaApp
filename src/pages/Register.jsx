import './Register.css';

const Register = () => {
  return (
    <div className="register-page">
        <div className="container-register my-5">
            <h4 className="text-left mb-4"><strong>Cadastre seu item para troca</strong></h4>
            <p className="Heading-5 text-left"><strong>Título do item</strong></p>
            <input type="text" className="form-control mb-3" placeholder="Ex: Bicicleta usada" />
            <p className="Heading-5 text-left"><strong>Descrição</strong></p>
            <textarea className="form-control mb-3" rows="4" placeholder="Descreva seu item..."></textarea>
            <p className="Heading-5 text-left"><strong>Categoria</strong></p>
            <select className="form-select mb-3">
                <option value="">Selecione uma categoria</option>
                <option value="eletronicos">Eletrônicos</option>
                <option value="moveis">Móveis</option>
                <option value="roupas">Roupas</option>
                <option value="brinquedos">Brinquedos</option>
                <option value="outros">Outros</option>
            </select>
            <p className="Heading-5 text-left"><strong>Estado de conservação</strong></p>
            <select className="form-select mb-3">
                <option value="">Selecione o estado</option>
                <option value="novo">Novo</option>
                <option value="bom">Bom</option>
                <option value="usado">Usado</option>
                <option value="precisa_reparo">Precisa de reparo</option>
            </select>
            <p className="Heading-5 text-left"><strong>Imagem do item</strong></p>
            <input type="file" className="form-control mb-3" />
            <button className="btn btn-success w-100"><strong>Cadastrar Item</strong></button>

        </div>
    </div>
  );
};

export default Register;