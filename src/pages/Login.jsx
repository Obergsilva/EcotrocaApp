import SocialLogin from "../components/SocialLogin";
import InputField from "../components/InputField";
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">FAÇA SEU LOGIN</h2>
      <SocialLogin />

      <p className="separator"><span>ou</span></p>

      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email" icon="mail" />
        <InputField type="password" placeholder="Senha" icon="lock" />

        <a href="#" className="forgot-password-link">Esqueceu a senha?</a>
        <button type="submit" className="login-button">Entrar</button>
      </form>

      <p className="signup-prompt">
        Não tem uma conta? <a href="#" className="signup-link">Cadastre-se</a>
      </p>
    </div>
  )
}

export default Login;
