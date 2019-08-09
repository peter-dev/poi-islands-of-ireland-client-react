import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import {Container} from 'semantic-ui-react';
import App from './App';
import DefaultHeader from '../src/components/header';
import LoginForm from './components/login';
import * as serviceWorker from './serviceWorker';


class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Container>
                    <DefaultHeader/>
                    <Switch>
                        <Route path='/login' component={LoginForm}/>
                        <Route exact path='/' component={App}/>
                        <Redirect from='*' to='/'/>
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
