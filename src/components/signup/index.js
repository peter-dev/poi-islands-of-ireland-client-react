import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Segment, Form} from 'semantic-ui-react';
import ErrorMessage from '../message';
import ApiService from '../../service/apiservice';

class SignupForm extends Component {
    state = {email: '', password: '', firstName: '', lastName: '', error: ''};

    handleChange = (e, {name, value}) => this.setState({[name]: value});

    handleSubmit = async () => {
        await ApiService.signup(this.state.email, this.state.password, this.state.firstName, this.state.lastName,
            () => {
                this.setState({email: '', password: '', firstName: '', lastName: '', error: ''});
                this.props.history.push('/');
            },
            (message) => {
                this.setState({password: '', error: message});
            }
        );
    };

    render() {
        const {email, password, firstName, lastName, error} = this.state;
        return (
            <Segment>
                <Form error={error !== ''} onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input
                            required
                            label='First Name'
                            placeholder='First Name'
                            name='firstName'
                            value={firstName}
                            onChange={this.handleChange}/>
                        <Form.Input
                            required
                            label='Last Name'
                            placeholder='Last Name'
                            name='lastName'
                            value={lastName}
                            onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Input icon='user' iconPosition='left'
                        required
                        label='Email'
                        placeholder='Email'
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
                    <ErrorMessage message={error}/>
                    <Form.Button color='blue' content='Submit'/>
                </Form>
            </Segment>
        );
    }
}

export default withRouter(SignupForm);