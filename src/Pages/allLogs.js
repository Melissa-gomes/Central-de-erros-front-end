import React from 'react';
import './allLogs.css'
import Header from '../components/header';
import abgg from '../imgs/abgg.png';

class allLogs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      myLogs: []
    }
    this.submitFetch = this.submitFetch.bind(this);
    this.myToken = this.myToken.bind(this);
  }

  myToken() {
    const myToken = localStorage.getItem('token');
    console.log(myToken);
    return myToken;
  }

  componentDidMount(){
    this.submitFetch();
  }

  async submitFetch() {
    const authHeaders = new Headers();
    authHeaders.append("Authorization", `bearer ${this.myToken()}`);
    const requestOptions = {
      method: 'GET',
      headers: authHeaders,
      redirect: 'follow'
    };
    fetch("https://codenation-central-de-erros-ca.herokuapp.com/logs?page=1", requestOptions)
      .then(response => response.json())
      .then(response => this.setState({ myLogs: response.content}))
      .catch(err => console.error(err))
  }

  render(){
    const { myLogs } = this.state;
    console.log(myLogs)
    return(
      <div>
        <Header />
        <img className="logo" src={abgg} />
        <div className="divsoria"></div>
        <h2 className="logs">Listagem de Logs</h2>
        <div className="filters">
          <select className="typeOne" name="Ordenardor">
            <option>Ordenar por:</option>
            <option>Id</option>
            <option>Nivel</option>
            <option>Descrição</option>
            <option>Origem</option>
            <option>Data</option>
            <option>Quantidade</option>
          </select>
          <select className="typeOne" name="pesquisar">
            <option>Pesquisar por:</option>
            <option>Id</option>
            <option>Nivel</option>
            <option>Descrição</option>
            <option>Origem</option>
            <option>Data</option>
            <option>Quantidade</option>
          </select>
          <input
            type="text"
            className="typeT"
            autocomplete="off"
            autocorrect="off"
            placeholder="Pesquisar"
          />
          <button type="button" className="btn">Pesquisar</button>
          <button type="button" className="btn">Limpar Filtros</button>
        </div>
        <div className="table">
          <table className="tableLog">
            <thead>
              <tr>
                <th className="topic">Id</th>
                <th className="topic">Nivel</th>
                <th className="topic">Descrição</th>
                <th className="topic">Origem</th>
                <th className="topic">Data</th>
                <th className="topic">Quantidade</th>
              </tr>
            </thead>
            <tbody>
            {myLogs.map((log) => (
            <tr className="celula" key="log">
              { Object.values(log).map((chaves) => (
                <td
                  key={ chaves }
                >
                  { chaves }
                </td>)) }
              </tr>))}
            </tbody>
          </table>
        </div>
        <button onClick={() => this.props.history.push('/cadLog')} type="button" className="btnNewLog">Criar Novo Log</button>
      </div>
    )
  }
};

export default allLogs;


