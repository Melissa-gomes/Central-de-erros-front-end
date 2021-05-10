import React from 'react';
import './cadLog.css';
import Header from '../components/header';
import abgg from '../imgs/abgg.png';

class CadLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 'warning',
      description: '',
      log: '',
      origin: '',
      quantity: 0,
    }

    this.myToken = this.myToken.bind(this);
  }

  myToken() {
    const myToken = localStorage.getItem('token');
    console.log(myToken);
    return myToken;
  }

  async submitFetch() {
    const authHeaders = new Headers();
    authHeaders.append("Authorization", `bearer ${this.myToken()}`);
        const requestOptions = {
          method: 'POST',
          headers: authHeaders,
          body: JSON.stringify({
            'level': this.state.level,
            'description': this.state.description,
            'log': this.state.log,
            'origin': this.state.origin,
            'quantity': this.state.quantity
          }),
          redirect: 'follow'
        };
        fetch("https://codenation-central-de-erros-ca.herokuapp.com/logs", requestOptions)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
  }

  render(){
    const { level, description, log, origin, quantity } = this.state;
    return(
      <div div="bodyA">
        <Header />
        <img className="logo" src={abgg} />
        <div className="divsoria"></div>
        <h2 className="addLog">Adicionar Novo Log</h2>
        <div className="containerInputs">
          <div className="partOne">
          <select
            className="inputCad1" 
            name="level" 
            value={level}
            onClick={ ({ target }) => this.setState({level: target.value}) }
          >
            <option>Error</option>
            <option>Warning</option>
            <option>Info</option>
          </select>
            <input
              type="text"
              name="description"
              autocomplete="off"
              value={description}
              onChange={ ({ target }) => this.setState({description: target.value}) }
              className="inputCad1"
              autocorrect="off"
              placeholder="description"
            />
            <input
              type="text"
              name="origin"
              value={origin}
              onChange={ ({ target }) => this.setState({origin: target.value}) }
              autocomplete="off"
              className="inputCad1"
              autocorrect="off"
              placeholder="origin"
            />
          </div>
          <input
            type="number"
            value={ quantity}
            onChange={ ({ target }) => this.setState({quantity: target.value}) }
            name="quantity"
            autocomplete="off"
            className="inputCad2"
            autocorrect="off"
            placeholder="quantity"
          />
          <textarea
            name="log"
            value={log}
            onChange={ ({ target }) => this.setState({log: target.value}) }
            className="inputCad3"
            placeholder="log"
          />
          <button onClick={this.submitFetch} type="button" className="buttonLog">Criar Log</button>
        </div>
      </div>
    )
  }
};
//()=> this.props.history.push('/successfulNewLog')
export default CadLog;