import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import Login from './login';
import './index.css';


function NoMatch(){ return <Login />};
class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                        <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/login' component={Login}/>
                        </Switch>
                    <Route component={NoMatch}/>
            </div>
            </BrowserRouter>
        );
    }
}


ReactDOM.render(
    <App />, 
    document.getElementById('root'));
    registerServiceWorker();