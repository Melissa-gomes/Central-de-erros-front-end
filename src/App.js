import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/login';
import Cadastro from './Pages/PageCad';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/qualquercoisa" component={ Cadastro } />
        </Switch>
    );
}

export default App;
