import React from 'react';
import {MemoryRouter} from 'react-router';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import 'semantic-ui-css/semantic.min.css'

import Header from '../src/components/header/';
import LoginForm from '../src/components/login';


storiesOf('POI App/Header', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <Header/>
    ));

storiesOf('POI App/Login Form', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <LoginForm/>
    ));
