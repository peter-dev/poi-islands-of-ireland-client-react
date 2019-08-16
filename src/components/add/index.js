import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Segment, Form} from 'semantic-ui-react';
import CustomMessage from '../message';
import ApiService from '../../service/apiservice';

class AddIslandForm extends Component {
    state = {region: '', name: '', lat: '', lng: '', description: '', error: '', success: '', dataRegions: []};

    componentDidMount = async () => {
        // fetch list of available regions from API when component is created
        const response = await ApiService.getRegions();
        this.setState({dataRegions: response});
    };

    handleChange = (e, {name, value}) => this.setState({[name]: value});

    handleSubmit = async () => {
        // handle form submission, display positive message on success or display error message
        // check the value of select component, initially it is set to empty string '' so it needs to be validated
        if (this.state.region !== '') {
            await ApiService.addIsland(this.state.name, this.state.description, this.state.lat, this.state.lng, this.state.region,
                (response) => {
                    this.setState({region: '', name: '', lat: '', lng: '', description: '', error: ''});
                    this.setState({success: `Island '${response.name}' has been created`});
                },
                (message) => {
                    this.setState({success: '', error: message});
                }
            );
        } else {
            this.setState({success: '', error: 'Invalid region (category)'});
        }

    };

    render() {
        // prepare selection props for semantic dropdown [{text: '', value: ''}]
        const regions = this.state.dataRegions.map(region => {
            const container = {};
            container['text'] = region.name;
            container['value'] = region._id;
            return container;
        });
        // set form error status to true and display message if error content is available
        const {name, lat, lng, description, error, success} = this.state;
        return (
            <Segment>
                <Form error={error !== ''} success={success !== ''} onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Select
                            required
                            label='Region (category)'
                            placeholder='Choose an option'
                            name='region'
                            options={regions}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            required
                            label='Name'
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.TextArea
                        required
                        label='Description'
                        placeholder='Description'
                        name='description'
                        value={description}
                        onChange={this.handleChange}
                    />
                    <Form.Group widths='equal'>
                        <Form.Input
                            required
                            label='Latitude'
                            placeholder='Latitude'
                            type='number'
                            step='0.00000001'
                            name='lat'
                            value={lat}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            required
                            label='Longitude'
                            placeholder='Longitude'
                            type='number'
                            step='0.00000001'
                            name='lng'
                            value={lng}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <CustomMessage type='success' header='Request successful...' content={success}/>
                    <CustomMessage type='error' header='There was a problem...' content={error}/>
                    <Form.Button color='blue' content='Submit'/>
                </Form>
            </Segment>
        );
    }
}

export default withRouter(AddIslandForm);