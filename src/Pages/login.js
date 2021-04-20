import React from 'react';
import Header from '../components/header';
import './login.css';
import abgg from '../imgs/abgg.png';

class Login extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <img className="logo" src={abgg} />
        <div className="login">
        <h2>Seja Bem Vindo.</h2>
          <p className="descrip">E-mail</p>
          <input
              type="email"
              autocomplete="off"
              className="inputLogin"
              autocorrect="off"
            />
            <p className="descrip">Senha</p>
            <input
              type="password"
              className="inputLogin"
            />
            <button
              type="button"
              className="button"
            >
              Entrar
            </button>
            <a href="/cadastro">Não tem uma conta? Experimente grátis!</a>
        </div>
      </div>
    )
  }
}

export default Login;