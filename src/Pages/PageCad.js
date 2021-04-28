import React from 'react';
import Header from '../components/header';
import './cad.css';
import abgg from '../imgs/abgg.png';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      senha: '',
      formError: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitFetch = this.submitFetch.bind(this);
    this.redirecionamento = this.redirecionamento.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  submitFetch() {
    const myInit = { 
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': this.state.name,
        'email': this.state.email,
        'password': this.state.senha,
      })
    }

    return fetch('https://codenation-central-de-erros-ca.herokuapp.com/users', myInit)
    .then((response) => {
      console.log(response);
      if(response.ok) {
        response.json()
        this.redirecionamento()
      } else {
        this.setState({ formError: true })
      }
    } )
    .catch((error) => console.log(`deu algum erro: ${error}`));
  }

  redirecionamento() {
    return(
      this.props.history.push('/successfulCad')
    )
  }

  render(){
    const { name, email, senha } = this.state;
    return(
      <div className="bodyC">
        <Header />
        <img className="logo" src={abgg} />
        <div className="login">
          <h2>Cadastrar Usuario.</h2>
          <p className="descrip">Nome</p>
          <input
            type="text"
            name="name"
            value={ name }
            autocomplete="off"
            className="inputLogin"
            autocorrect="off"
            onChange={ this.handleChange }
          />
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
            name="senha"
            value={ senha }
            className="inputLogin"
            onChange={ this.handleChange }
          />
          { this.state.formError && <span className="span">Todos os campos precisam ser preenchidos</span> }
          <button
            type="button"
            className="button"
            onClick={ this.submitFetch }
          >
            Cadastrar-se
          </button>
        </div>
      </div>
    )
  }
}

export default Cadastro;