import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import {Container} from 'semantic-ui-react';
import App from './App';
import PrivateRoute from './components/privateroute';
import NotFound from './components/notfound';
import DefaultHeader from './components/header';
import LoginForm from './components/login';
import SignupForm from './components/signup';
import AddIslandForm from './components/add'
import EditIslandForm from './components/edit';

import * as serviceWorker from './serviceWorker';


class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Container>
                    <DefaultHeader/>
                    <Switch>
                        <PrivateRoute exact path='/' component={App} />
                        <PrivateRoute path='/add' component={AddIslandForm}/>
                        <PrivateRoute path='/edit/:id' component={EditIslandForm}/>
                        <Route path='/login' component={LoginForm}/>
                        <Route path='/signup' component={SignupForm}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Container>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Router/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
