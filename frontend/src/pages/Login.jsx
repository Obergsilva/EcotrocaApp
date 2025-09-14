import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <- importar
import "./Login.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate(); // <- criar hook

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Erro ao fazer login");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user.id);

      // redireciona para a página de perfil
      navigate("/perfil/" + data.user.id);
    } catch (err) {
      console.error("Erro no login:", err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="form-title">FAÇA SEU LOGIN</h2>

        <form onSubmit={handleLogin} className="login-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit" className="btn btn-success btn-login">
            Entrar
          </button>
        </form>

        <p className="signup-prompt">
          Não tem uma conta?{" "}
          <a href="/cadastrarUsuario" className="signup-link">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
