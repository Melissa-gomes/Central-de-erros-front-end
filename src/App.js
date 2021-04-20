import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/login';
import cadastro from './Pages/cadastro';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/cadastro" component={ cadastro } />
        </Switch>
    );
}

export default App;
