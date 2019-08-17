import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Segment, Form} from 'semantic-ui-react';
import CustomMessage from '../message';
import CustomDropdown from '../form/dropdown';
import CustomInputText from '../form/inputext';
import CustomInputNumber from '../form/inputnumber';
import CustomTextArea from '../form/textarea';
import withDidMount from '../withdidmount';
import ApiService from "../../service/apiservice";

class EditIslandForm extends Component {
    state = {region: '', name: '', lat: '', lng: '', description: '', error: ''};

    componentDidMount = async () => {
        // fetch selected island by id from API when component is rendered
        const response = await ApiService.getIslandById(this.props.match.params.id);
        const {name, description, location, region} = response;
        this.setState({region: region, name: name, description: description, lat: location.lat, lng: location.lng});
    };

    handleChange = (e, {name, value}) => this.setState({[name]: value});

    handleSubmit = async () => {
        // handle form submission, redirect and display message on success or render error message on failure
        await ApiService.updateIsland(this.state.name, this.state.description, this.state.lat, this.state.lng, this.state.region, this.props.match.params.id,
            (response) => {
                this.setState({region: '', name: '', lat: '', lng: '', description: '', error: ''});
                this.props.history.push({
                    pathname: '/',
                    state: {success: `Island '${response.name}' has been updated`}
                })
            },
            (message) => {
                this.setState({error: message});
            }
        );

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
                    <Form.Button color='blue' content='Update'/>
                </Form>
            </Segment>
        );
    }
}

export default withDidMount(withRouter(EditIslandForm));