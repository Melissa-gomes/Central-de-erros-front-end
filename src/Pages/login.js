import React from 'react';
import Header from '../components/header';
import './login.css';
import abgg from '../imgs/abgg.png';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitFetch = this.submitFetch.bind(this);
  }

  submitFetch() {
    const { email, senha } = this.state;
    const URL = 'http://localhost:8080/oauth/token';

    const CLIENT = {
      ID: 'codenation',
      SECRET: '123',
    };

    fetch(URL, {
      body: `grant_type=password&username=${email}&password=${senha}&scope=password&client_id=${CLIENT.ID}&client_secret=${CLIENT.SECRET}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      method: "POST"
    })
      .then(data => data.json())
      .then(data => console.log(data));
  }

  handleChange({ target }) {
    const { name, value } = target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render(){
    const { email, password } = this.state;
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
            <a href="/qualquercoisa">Não tem uma conta? Experimente grátis!</a>
        </div>
      </div>
    )
  }
}

export default Login;