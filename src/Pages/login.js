import React from 'react';
import Header from '../components/header';
import { Redirect } from 'react-router-dom';
import './login.css';
import abgg from '../imgs/abgg.png';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      logado: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitFetch = this.submitFetch.bind(this);
    this.tokenInLocalStorage = this.tokenInLocalStorage.bind(this);
  }
  tokenInLocalStorage(response) {
    localStorage.setItem("token", response.access_token)
    const tokenInLocal = localStorage.getItem('token');
    if(tokenInLocal && tokenInLocal !== null || tokenInLocal !== undefined) {
      this.setState({ logado: true });
    }
  }

  async submitFetch() {
    const { email, password } = this.state;
    const authHeaders = new Headers();
        authHeaders.append("Authorization", "Basic Y29kZW5hdGlvbjoxMjM=");
        const formdata = new FormData();
        formdata.append("username", email);
        formdata.append("password", password);
        formdata.append("grant_type", "password");
        const requestOptions = {
          method: 'POST',
          headers: authHeaders,
          body: formdata,
          redirect: 'follow'
        };
        fetch("https://codenation-central-de-erros-ca.herokuapp.com/oauth/token", requestOptions)
          .then(response => response.json())
          .then(response => this.tokenInLocalStorage(response))
          .catch(err => console.error(err));
  }


  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render(){
    const { email, password, logado } = this.state;
    return(
      <div className="bodyF">
        <Header />
        <img className="logo" src={abgg} />
        <div className="login">
        <h2>Seja Bem Vindo.</h2>
          <p className="descrip">E-mail</p>
          <input
              type="email"
              name="email"
              value={ email }
              autocomplete="off"
              className="inputLogin"
              autocorrect="off"
              onChange={ this.handleChange }
            />
            <p className="descrip">Senha</p>
            <input
              type="password"
              name="password"
              value={ password }
              className="inputLogin"
              onChange={ this.handleChange }
            />
            <button
              type="button"
              className="button"
              onClick={ this.submitFetch }
            >
              Entrar
            </button>
            { logado && <Redirect to="/allLog" />}
            <a href="/cadastro">Não tem uma conta? Experimente grátis!</a>
        </div>
      </div>
    )
  }
}

export default Login;