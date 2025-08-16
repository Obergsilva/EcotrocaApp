import React from 'react';
import { Link } from 'react-router-dom';
import logoEcotroca from '../assets/logo.png';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <img className='me-2' src={logoEcotroca} alt="Logo Ecotroca" style={{ width: '50px', height: '50px' }} />
        <Link className="navbar-brand" to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#198753' }}>
          EcoTroca
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-2">
            <li className="nav-item">
              <Link className="btn btn-outline-success" to="/">Início</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-success" to="/cadastrarItem">Cadastrar Item</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-success" to="/perfil">Perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-success" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;