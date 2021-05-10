import React from 'react';
import './NewLog.css';
import Header from '../components/header';
import abgg from '../imgs/abgg.png';

class NewLog extends React.Component {
  constructor(props) {
    super(props);

    this.redirecionamento = this.redirecionamento.bind(this);
  }

  redirecionamento() {
    return(
      this.props.history.push('/allLog')
    )
  }

  render(){
    return(
      <div className="bodyL">
        <Header />
        <img className="logo" src={abgg} />
        <div className="ac">
          <h2 className="h2">Novo Log Cadastrado com Sucesso!</h2>
          <h4 className="h4">Click no botão a baixo para retornar a lista de Logs</h4>
          <button
            onClick={ this.redirecionamento }
          >Retornar aos Logs</button>
        </div>
      </div>
    )
  }
};

export default NewLog;