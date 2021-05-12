import React from 'react';
import './cadLog.css';
import Header from '../components/header';
import abgg from '../imgs/abgg.png';

class CadLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: '',
      description: '',
      log: '',
      origin: '',
      quantity: 0,
    }
    this.submitFetch = this.submitFetch.bind(this);
    this.myToken = this.myToken.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({...this.state, [event.target.name]: event.target.value});
  }

  myToken() {
    const myToken = localStorage.getItem('token');
    console.log(myToken);
    return myToken;
  }

  async submitFetch () {
   const authHeaders = new Headers();
    authHeaders.append("Authorization", `bearer ${this.myToken()}`);
    authHeaders.append('Content-Type', 'application/json')
    const myInit = { 
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify({
        'level': this.state.level,
        'description': this.state.description,
        'log': this.state.log,
        'origin': this.state.origin,
        'date': new Date(Date.now()).toISOString(),
        'quantity': this.state.quantity
      }),
      redirect: 'follow'
    }

    return fetch('https://codenation-central-de-erros-ca.herokuapp.com/logs', myInit)
    .then(response => response.json())
      .then(response => this.props.history.push('/successfulNewLog'))
      .catch(err => console.error(err))
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
            value={this.state.level} onChange={this.handleChange}
          >
            
            <option value='Error'>Error</option>
            <option value='Warning'>Warning</option>
            <option value='Info'>Info</option>
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
//()=> 
export default CadLog;