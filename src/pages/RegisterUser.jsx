import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterUser.css';


const RegisterUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    neighborhood: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    
    if (!formData.name || !formData.email || !formData.city || !formData.neighborhood || !formData.password) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    console.log('Usuário registrado com sucesso');
    alert('Conta criada com sucesso!');
    navigate('/login');
  } 

  return (
    <div className="register-page">
      <div className="container-register my-4">
        <h1 className="Heading-5 text-left mb-2">Criar Conta</h1>
        <p className="Heading-5 text-left mb-4">Preencha os dados abaixo para criar sua conta.</p>        
        <p className="Heading-5 text-left"><strong>Nome Completo</strong></p>
        <input 
          type="text" 
          className="form-control mb-3" 
          placeholder="Seu nome" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required />

        <p className="Heading-5 text-left"><strong>Email</strong></p>
        <input 
          type="email" 
          className="form-control mb-3" 
          placeholder="seu@email.com" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required />

        <div className="row mb-2">
          <div className="col-md-6">
            <p className="Heading-5 text-left"><strong>Cidade</strong></p>
            <input 
              type="text" 
              className="form-control mb-3" 
              placeholder="Sua cidade"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="col-md-6">
            <p className="Heading-5 text-left"><strong>Bairro</strong></p>
            <input 
              type="text" 
              className="form-control mb-3" 
              placeholder="Seu bairro"
              name="neighborhood"
              value={formData.neighborhood}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <p className="Heading-5 text-left"><strong>Senha</strong></p>
        <input 
          type="password" 
          className="form-control mb-3" 
          placeholder="********" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <p className="Heading-5 text-left"><strong>Confirmar Senha</strong></p>
        <input 
          type="password" 
          className="form-control mb-3" 
          placeholder="********" 
          name="confirmPassword" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          required 
        />
        
        <button className="btn btn-success w-100" onClick={handleSubmit}>
          <strong>Criar Conta</strong>
        </button>

        <p className="text-center mt-3">Já tem uma conta? <a href="/login" className='text-success'>Faça login</a></p>
        <p className="text-center mt-3"><a href="/" className='text-success'> Voltar para a página inicial</a></p>
      </div>
    </div>
  );
};

export default RegisterUser;