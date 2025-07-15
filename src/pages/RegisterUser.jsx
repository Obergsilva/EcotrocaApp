import React, { useState } from 'react';
import './RegisterUser.css';


const RegisterUser = () => {

  return (
    <div className="register-page">
      <div className="container-register my-4">
        <h4 className="text-left mb-2"><strong>Criar conta</strong></h4>
        <p className="Heading-5 text-left mb-4">Junte-se à nossa comunidade de trocas sustentáveis.</p>
        
        <p className="Heading-5 text-left"><strong>Nome Completo</strong></p>
        <input type="text" className="form-control mb-3" placeholder="Seu nome" />
        
        <p className="Heading-5 text-left"><strong>Email</strong></p>
        <input type="email" className="form-control mb-3" placeholder="seu@email.com" />
        
        <div className="row mb-2">
          <div className="col-md-6">
            <p className="Heading-5 text-left"><strong>Cidade</strong></p>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Sua cidade"
            />
          </div>
          
          <div className="col-md-6">
            <p className="Heading-5 text-left"><strong>Bairro</strong></p>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Seu bairro"
            />
          </div>
        </div>
        
        <p className="Heading-5 text-left"><strong>Senha</strong></p>
        <input type="password" className="form-control mb-3" placeholder="********" />
        <p className="Heading-5 text-left"><strong>Confirmar Senha</strong></p>
        <input type="password" className="form-control mb-3" placeholder="********" />

        <button className="btn btn-success w-100"><strong>Criar Conta</strong></button>
        <p className="text-center mt-3">Já tem uma conta? <a href="/login" className='text-success'>Faça login</a></p>
        <p className="text-center mt-3"><a href="/" className='text-success'> Voltar para a página inicial</a></p>
      </div>
    </div>
  );
};

export default RegisterUser;