import React from  'react';
import './successCad.css';
import Header from '../components/header';
import abgg from '../imgs/abgg.png';

class successfulCad extends React.Component {
  constructor(props) {
    super(props);

    this.redirecionamento = this.redirecionamento.bind(this);
  }

  redirecionamento() {
    return(
      this.props.history.push('/')
    )
  }

  render(){
    return(
      <div className="bodyS">
        <Header />
        <img className="logo" src={abgg} />
        <div className="abc">
          <h2 className="h2">Cadastro Realizado com Sucesso!</h2>
          <h4 className="h4">Agora retorne para fazer o login</h4>
          <button
            onClick={ this.redirecionamento }
          >Fazer Login</button>
        </div>
      </div>
    )
  }
}

export default successfulCad;