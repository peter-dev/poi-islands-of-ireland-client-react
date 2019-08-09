import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

export default class DefaultHeader extends Component {
    state = {};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <Menu>
                <Menu.Item header as={Link} to='/'
                           name='home'
                           content='POI'
                />
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to='/login'
                               name='login'
                               active={activeItem === 'login'}
                               content='Login'
                               onClick={this.handleItemClick}
                    />
                    <Menu.Item as={Link} to='/signup'
                               name='signup'
                               active={activeItem === 'signup'}
                               content='Signup'
                               onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}