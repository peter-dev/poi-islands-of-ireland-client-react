import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import ApiService from '../../service/apiservice';

class DefaultHeader extends Component {
    state = {};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    handleLogout = () => {
        // handle logout action, redirect to home page
        ApiService.logout(() => {
            this.setState({activeItem: 'login'});
            this.props.history.push('/');
        })
    };

    render() {
        // get value of currently active menu item, render different menu based on user authentication status
        const {activeItem} = this.state;
        return (
            <Menu>
                <Menu.Item header as={Link} to='/'
                           name='home'
                           content='POI'
                />
                {ApiService.isLoggedIn() === false
                    ? <Menu.Menu position='right'>
                        <Menu.Item as={Link} to='/login'
                                   name='login'
                                   active={activeItem !== 'signup'}
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
                    : <Menu.Menu position='right'>
                        <Menu.Item as={Link} to='/'
                                   name='dashboard'
                                   active
                                   content='Dashboard'
                                   onClick={this.handleItemClick}
                        />
                        <Menu.Item name='logout'
                                   content='Logout'
                                   onClick={this.handleLogout}
                        />
                    </Menu.Menu>
                }

            </Menu>
        )
    }
}

export default withRouter(DefaultHeader);