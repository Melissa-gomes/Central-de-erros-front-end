import React from 'react';
import './allLogs.css'
import Header from '../components/header';
import abgg from '../imgs/abgg.png';
import dataFormat from 'dateformat';

class allLogs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      myLogs: [],
      order: '',
      search: '',
      textSearch: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitFetch = this.submitFetch.bind(this);
    this.myToken = this.myToken.bind(this);
  }

  handleChange(event) {
    this.setState({...this.state, [event.target.name]: event.target.value});
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
    const { order, search, textSearch } = this.state;

    const sortBy = order != "" ? `&sort=${order}` : "";
    const searchBy = search != "" ? `&filter=${search}&value=${textSearch}` : "";
    const urlLimpa = `https://codenation-central-de-erros-ca.herokuapp.com/logs?${sortBy}${searchBy}`;
    fetch(urlLimpa, requestOptions)
      .then(response => response.json())
      .then(response => this.setState({ myLogs: response.content}))
      .catch(err => console.error(err))
  }

  render(){
    const { myLogs, order, search, textSearch } = this.state;
    return(
      <div>
        <Header />
        <img className="logo" src={abgg} />
        <div className="divsoria"></div>
        <h2 className="logs">Listagem de Logs</h2>
        <div className="filters">
          <select
            className="typeOne"
            name="order"
            value={this.state.value} onChange={this.handleChange}
          >
            {console.log(order)}
            <option value="">Ordenar por:</option>
            <option value="id">Id</option>
            <option value="level">Nivel</option>
            <option value="description">Descrição</option>
            <option value="origin">Origem</option>
            <option value="date">Data</option>
            <option value="quantity">Quantidade</option>
          </select>
          <select
            className="typeOne"
            name="search"
            value={this.state.value} onChange={this.handleChange}
          >
            <option value="">Pesquisar por:</option>
            <option value="nivel">Nivel</option>
            <option value="description">Descrição</option>
            <option value="origin">Origem</option>
            <option value="date">Data</option>
            <option value="quantity">Quantidade</option>
          </select>
          <input
            type="text"
            className="typeT"
            autocomplete="off"
            autocorrect="off"
            placeholder="Pesquisar"
            value={textSearch}
            onChange={(event) => this.setState({...this.state, textSearch: event.target.value})}
          />
          <button type="button" className="btn" onClick={ this.submitFetch }>Pesquisar</button>
          <button type="button" className="btn" onClick={ async () => {
            await this.setState({...this.state, order: '', search: '', textSearch: ''});
            this.submitFetch();
          }} >Limpar Filtros</button>
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
            {myLogs && myLogs.map((log) => (
            <tr className="celula" key="log">
              { Object.values(log).map((chaves, index) => (
                <td
                  key={ chaves }
                >
                  {index === 4 ? dataFormat(chaves, "dd/mm/yyyy") : chaves}
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


