import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Segment, Form} from 'semantic-ui-react';
import CustomMessage from '../message';
import ApiService from '../../service/apiservice';

class LoginForm extends Component {
    state = {email: 'marge@simpson.com', password: 'secret', error: ''}; // default values for testing purpose

    handleChange = (e, {name, value}) => this.setState({[name]: value});

    handleSubmit = async () => {
        // handle form submission, redirect to home page on success or display error message
        await ApiService.login(this.state.email, this.state.password,
            () => {
                this.setState({email: '', password: '', error: ''});
                this.props.history.push('/');
            },
            (message) => {
                this.setState({password: '', error: message});
            }
        );
    };

    render() {
        // set form error status to true and display message if error content is available
        const {email, password, error} = this.state;
        return (
            <Segment>
                <Form error={error !== ''} onSubmit={this.handleSubmit}>
                    <Form.Input icon='user' iconPosition='left'
                                required
                                label='Email'
                                placeholder='Email'
                                type='email'
                                name='email'
                                value={email}
                                onChange={this.handleChange}/>
                    <Form.Input icon='lock' iconPosition='left'
                                required
                                label='Password'
                                placeholder='Password'
                                type='password'
                                name='password'
                                value={password}
                                onChange={this.handleChange}
                    />
                    <CustomMessage type='error' header='There was a problem...' content={error}/>
                    <Form.Button color='blue' content='Submit'/>
                </Form>
            </Segment>
        );
    }
}

export default withRouter(LoginForm);