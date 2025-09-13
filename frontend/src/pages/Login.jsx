import { useState } from "react";
import InputField from "../components/InputField";
import "./Login.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // <- importante
        },
        body: JSON.stringify({ email, senhaHash: senha }), // <- precisa bater com req.body no backend
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        alert(data.message || "Erro ao fazer login");
        return;
      }

      // salvar token no localStorage
      localStorage.setItem("token", data.token);

      alert("Login realizado com sucesso!");
    } catch (err) {
      console.error("Erro no login:", err);
    }
  };

  return (
    <div className="login-container my-4">
      <h2 className="form-title">FAÇA SEU LOGIN</h2>

      <form onSubmit={handleLogin} className="login-form">
        <p>
          <strong>Email</strong>
        </p>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>
          <strong>Senha</strong>
        </p>
        <InputField
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit" className="btn btn-success w-100">
          Entrar
        </button>
      </form>
      <a href="#" className="forgot-password-link">
        Esqueceu a senha?
      </a>

      <p className="signup-prompt">
        Não tem uma conta?{" "}
        <a href="/cadastrarUsuario" className="signup-link">
          <strong>Cadastre-se</strong>
        </a>
      </p>
    </div>
  );
};

export default Login;
