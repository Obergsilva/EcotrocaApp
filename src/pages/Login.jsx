import InputField from "../components/InputField";
import './Login.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">FAÇA SEU LOGIN</h2>

      <form action="#" className="login-form">
        <p><strong>Email</strong></p>
        <InputField type="email" placeholder="Email"/>
        <p><strong>Senha</strong></p>
        <InputField type="password" placeholder="Senha"/>

        <button type="submit" className="btn btn-success w-100">Entrar</button>
      </form>
        <a href="#" className="forgot-password-link">Esqueceu a senha?</a>

      <p className="signup-prompt">
        Não tem uma conta? <a href="/cadastrarUsuario" className="signup-link">Cadastre-se</a>
      </p>
    </div>
  )
}

export default Login;
