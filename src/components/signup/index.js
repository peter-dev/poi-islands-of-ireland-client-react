import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Segment, Form} from 'semantic-ui-react';
import CustomMessage from '../message';
import ApiService from '../../service/apiservice';
import CustomInputText from '../form/inputext';
import CustomInputEmail from '../form/inputemail';
import CustomInputPassword from '../form/inputpassword';

class SignupForm extends Component {
    state = {email: '', password: '', firstName: '', lastName: '', error: ''};

    handleChange = (e, {name, value}) => this.setState({[name]: value});

    handleSubmit = async () => {
        // handle form submission, redirect to home page on success or display error message
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
        // set form error status to true and display message if error content is available
        const {email, password, firstName, lastName, error} = this.state;
        return (
            <Segment>
                <Form error={error !== ''} onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <CustomInputText name='firstName' label='First Name' type='text' value={firstName}
                                         handleChange={this.handleChange}/>

                        <CustomInputText name='lastName' label='Last Name' type='text' value={lastName}
                                         handleChange={this.handleChange}/>
                    </Form.Group>
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

export default withRouter(SignupForm);