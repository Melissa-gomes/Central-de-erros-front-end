import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/login';
import Cadastro from './Pages/PageCad';
import successfulCad from './Pages/successfulCad';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/cadastro" component={ Cadastro } />
            <Route exact path="/successfulCad" component={ successfulCad } />
        </Switch>
    );
}

export default App;
