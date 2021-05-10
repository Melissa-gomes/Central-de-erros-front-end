import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/login';
import Cadastro from './Pages/PageCad';
import successfulCad from './Pages/successfulCad';
import CadLog from './Pages/cadLog';
import allLogs from './Pages/allLogs';
import NewLog from './Pages/NewLog';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/cadastro" component={ Cadastro } />
            <Route exact path="/successfulCad" component={ successfulCad } />
            <Route exact path="/cadLog" component={ CadLog } />
            <Route exact path="/allLog" component={ allLogs } />
            <Route exact path="/successfulNewLog" component={ NewLog } />
        </Switch>
    );
}

export default App;
