import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Segment, Form} from 'semantic-ui-react';
import CustomMessage from '../message';
import ApiService from '../../service/apiservice';
import CustomInputEmail from '../form/inputemail';
import CustomInputPassword from '../form/inputpassword';

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
                    <CustomInputEmail name='email' label='Email' value={email} handleChange={this.handleChange}/>
                    <CustomInputPassword name='password' label='Password' value={password}
                                         handleChange={this.handleChange}/>
                    <CustomMessage type='error' header='There was a problem...' content={error}/>
                    <Form.Button color='blue' content='Submit'/>
                </Form>
            </Segment>
        );
    }
}

export default withRouter(LoginForm);