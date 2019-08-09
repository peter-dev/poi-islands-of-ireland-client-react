import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {Segment, Form, Message} from 'semantic-ui-react';
import ApiService from "../../service/apiservice";

class LoginForm extends Component {
    state = {email: '', password: '', error: ''};

    handleChange = (e, {name, value}) => this.setState({[name]: value});

    handleSubmit = async () => {
        await ApiService.login(this.state.email, this.state.password,
            () => {
                this.setState({email: '', password: '', error: ''});
                // TODO redirect to dashboard
                this.props.history.push('/');
            },
            (message) => {
                this.setState({password: '', error: message});
            }
        );
    };

    render() {
        const {email, password, error} = this.state;
        return (
            <Segment>
                <Form error={error !== ''} onSubmit={this.handleSubmit}>
                    <Form.Input
                        label='Email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}/>
                    <Form.Input
                        label='Password'
                        placeholder='Password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                    />
                    <Message
                        error
                        header='There was a problem...'
                        content={error}
                    />
                    <Form.Button content='Submit'/>
                </Form>
            </Segment>
        );
    }
}

export default withRouter(LoginForm);