import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoEcotroca from "../assets/logo.png";
import { useAuth } from "../context/authProvider"; // 1. Importar

const Header = () => {
  const { user, logout } = useAuth(); // 2. Pegar user e logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Chama a função de logout do contexto
    navigate("/login"); // Redireciona para a página de login
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <img
          className="me-2"
          src={logoEcotroca}
          alt="Logo Ecotroca"
          style={{ width: "50px", height: "50px" }}
        />
        <Link
          className="navbar-brand"
          to="/"
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#198753" }}
        >
          EcoTroca
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-2">
            <li className="nav-item">
              <Link className="btn btn-outline-success" to="/">
                Início
              </Link>
            </li>
            {/* 3. Lógica condicional */}
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-success" to="/perfil">
                    Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-success" to="/cadastrarItem">
                    Cadastrar Item
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Sair
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-outline-success" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
