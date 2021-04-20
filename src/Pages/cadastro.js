import React from 'react';
import Header from '../components/header';
import './cadastro.css';
import abgg from '../imgs/abgg.png';

class cadastro extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <img className="logo" src={abgg} />
        <div className="login">
        <h2>Cadastrar Usuario.</h2>
        <p className="descrip">Nome</p>
          <input
              type="text"
              autocomplete="off"
              className="inputLogin"
              autocorrect="off"
            />
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
              Cadastrar-se
            </button>
        </div>
      </div>
    )
  }
}

export default cadastro;