import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Segment, Form} from 'semantic-ui-react';
import CustomMessage from '../message';
import CustomDropdown from '../form/dropdown';
import CustomInputText from '../form/inputext';
import CustomInputNumber from '../form/inputnumber';
import CustomTextArea from '../form/textarea';
import ApiService from '../../service/apiservice';
import withDidMount from "../withdidmount";

class AddIslandForm extends Component {
    state = {region: '', name: '', lat: '', lng: '', description: '', error: ''};

    handleChange = (e, {name, value}) => this.setState({[name]: value});

    handleSubmit = async () => {
        // handle form submission, redirect and display message on success or render error message on failure
        // check the value of dropdown component, required doesn't work and initially it is set to empty string ''
        if (this.state.region === '') {
            this.setState({error: 'Invalid region (category)'});
        } else {
            await ApiService.addIsland(this.state.name, this.state.description, this.state.lat, this.state.lng, this.state.region,
                (response) => {
                    this.setState({region: '', name: '', lat: '', lng: '', description: '', error: ''});
                    this.props.history.push({
                        pathname: '/',
                        state: {success: `Island '${response.name}' has been created`}
                    })
                },
                (message) => {
                    this.setState({error: message});
                }
            );
        }
    };

    render() {
        // get a list of regions for the dropdown options
        const regions = this.props.regions;
        // if error message received, set form error status to true and display response message
        const {region, name, lat, lng, description, error} = this.state;
        return (
            <Segment>
                <Form error={error !== ''} onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <CustomDropdown name='region' label='Region (category)' options={regions}
                                        handleChange={this.handleChange} value={region}/>
                        <CustomInputText name='name' label='Name' type='text' value={name}
                                         handleChange={this.handleChange}/>
                    </Form.Group>
                    <CustomTextArea name='description' label='Description' value={description}
                                    handleChange={this.handleChange}/>

                    <Form.Group widths='equal'>
                        <CustomInputNumber name='lat' label='Latitude' step='0.00000001' value={lat}
                                           handleChange={this.handleChange}/>
                        <CustomInputNumber name='lng' label='Longitude' step='0.00000001' value={lng}
                                           handleChange={this.handleChange}/>
                    </Form.Group>
                    <CustomMessage type='error' header='There was a problem...' content={error}/>
                    <Form.Button color='blue' content='Submit'/>
                </Form>
            </Segment>
        );
    }
}

export default withDidMount(withRouter(AddIslandForm));