import React, { useState } from 'react';
import './RegisterUser.css';

const estadosBrasileiros = [
  { sigla: 'AC', nome: 'Acre' }, { sigla: 'AL', nome: 'Alagoas' },
  { sigla: 'AP', nome: 'Amapá' }, { sigla: 'AM', nome: 'Amazonas' },
  { sigla: 'BA', nome: 'Bahia' }, { sigla: 'CE', nome: 'Ceará' },
  { sigla: 'DF', nome: 'Distrito Federal' }, { sigla: 'ES', nome: 'Espírito Santo' },
  { sigla: 'GO', nome: 'Goiás' }, { sigla: 'MA', nome: 'Maranhão' },
  { sigla: 'MT', nome: 'Mato Grosso' }, { sigla: 'MS', nome: 'Mato Grosso do Sul' },
  { sigla: 'MG', nome: 'Minas Gerais' }, { sigla: 'PA', nome: 'Pará' },
  { sigla: 'PB', nome: 'Paraíba' }, { sigla: 'PR', nome: 'Paraná' },
  { sigla: 'PE', nome: 'Pernambuco' }, { sigla: 'PI', nome: 'Piauí' },
  { sigla: 'RJ', nome: 'Rio de Janeiro' }, { sigla: 'RN', nome: 'Rio Grande do Norte' },
  { sigla: 'RS', nome: 'Rio Grande do Sul' }, { sigla: 'RO', nome: 'Rondônia' },
  { sigla: 'RR', nome: 'Roraima' }, { sigla: 'SC', nome: 'Santa Catarina' },
  { sigla: 'SP', nome: 'São Paulo' }, { sigla: 'SE', nome: 'Sergipe' },
  { sigla: 'TO', nome: 'Tocantins' }
];

const RegisterUser = () => {
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidade, setCidade] = useState('');

  return (
    <div className="register-page">
      <div className="container-register my-4">
        <h4 className="text-left mb-2"><strong>Criar conta</strong></h4>
        <p className="Heading-5 text-left mb-4">Junte-se à nossa comunidade de trocas sustentáveis.</p>
        
        <p className="Heading-5 text-left"><strong>Nome Completo</strong></p>
        <input type="text" className="form-control mb-3" placeholder="Seu nome" />
        
        <p className="Heading-5 text-left"><strong>Email</strong></p>
        <input type="email" className="form-control mb-3" placeholder="seu@email.com" />
        
        <div className="row mb-3">
          <div className="col-md-6">
            <p className="Heading-5 text-left"><strong>Estado</strong></p>
            <select 
              className="form-select"
              value={estadoSelecionado}
              onChange={e => setEstadoSelecionado(e.target.value)}
            >
              <option value="" disabled>Selecione</option>
              {estadosBrasileiros.map((estado) => (
                <option key={estado.sigla} value={estado.sigla}>
                  {estado.nome}
                </option>
              ))}
            </select>
          </div>
          
          <div className="col-md-6">
            <p className="Heading-5 text-left"><strong>Cidade</strong></p>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Sua cidade"
              value={cidade}
              onChange={e => setCidade(e.target.value)}
            />
          </div>
        </div>
        
        <p className="Heading-5 text-left"><strong>Senha</strong></p>
        <input type="password" className="form-control mb-3" placeholder="********" />
        <p className="Heading-5 text-left"><strong>Confirmar Senha</strong></p>
        <input type="password" className="form-control mb-3" placeholder="********" />

        <button className="btn btn-success w-100"><strong>Criar Conta</strong></button>
      </div>
    </div>
  );
};

export default RegisterUser;