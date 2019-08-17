import React, {Component} from 'react';
import ApiService from "../../service/apiservice";

const withDidMount = (PassedComponent) => {
    return class NewComponent extends Component {
        state = {dataRegions: []};

        componentDidMount = async () => {
            // fetch list of available regions from API when component is rendered
            const response = await ApiService.getRegions();
            this.setState({dataRegions: response});
        };

        render() {
            // prepare selection props for semantic dropdown [{text: '', value: ''}]
            const regions = this.state.dataRegions.map(region => {
                const container = {};
                container['text'] = region.name;
                container['value'] = region._id;
                return container;
            });
            return (<PassedComponent {...this.props} regions={regions}/>)
        }
    }
};

export default withDidMount;