import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ fontWeight: 'bold', color: '#28a745' }}>
          Ecotroca
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-2">
            <li className="nav-item">
              <Link className="btn btn-outline-success" to="/">Início</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-success" to="/cadastrarTroca">Cadastrar Troca</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-success" to="/cadastrarItem">Cadastrar Item</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-success" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;