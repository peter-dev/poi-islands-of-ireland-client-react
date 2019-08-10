import React from 'react';
import {MemoryRouter} from 'react-router';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import 'semantic-ui-css/semantic.min.css'
import NotFound from '../src/components/notfound';
import ErrorMessage from '../src/components/message';
import Header from '../src/components/header/';
import LoginForm from '../src/components/login';
import SignupForm from '../src/components/signup';


storiesOf('POI App/Header', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <Header/>
    ));

storiesOf('POI App/Not Found', module).add('default', () => (<NotFound/>));

const errorMessage = 'Validation failed';
storiesOf('POI App/Error Message', module).add('default', () => (<ErrorMessage message={errorMessage}/>));

storiesOf('POI App/Login Form', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <LoginForm/>
    ));

storiesOf('POI App/Signup Form', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <SignupForm/>
    ));
