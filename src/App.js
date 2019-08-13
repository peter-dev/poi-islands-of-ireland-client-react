import React, {Component} from 'react';
import {Segment} from 'semantic-ui-react';
import SearchControls from './components/searchcontrols';
import IslandDetails from './components/island';
import Map from './components/map';
import ApiService from './service/apiservice';

class App extends Component {
    state = {
        region: '', // selected region id
        island: '', // selected island id
        dataRegions: [],
        dataIslands: [],
        dataRatings: [],
    };

    componentDidMount = async () => {
        const response = await ApiService.getRegions();
        this.setState({dataRegions: response});
    };

    getIslandsById = async (id) => {
        const response = await ApiService.getIslandsByRegion(id);
        this.setState({dataIslands: response});
    };

    getRatingsById = async (id) => {
        const response = await ApiService.getRatingsByIsland(id);
        this.setState({dataRatings: response});
    };

    handleChange = async (name, value) => {
        this.setState({[name]: value});
        name === 'region' && this.getIslandsById(value);
        name === 'island' && this.getRatingsById(value);
    };

    render() {
        // prepare selection props for semantic dropdown [{text: '', value: ''}]
        const regions = this.state.dataRegions.map(region => {
            const container = {};
            container['text'] = region.name;
            container['value'] = region._id;
            return container;
        });
        // prepare selection props for semantic dropdown [{text: '', value: ''}]
        const islands = this.state.dataIslands.map(island => {
            const container = {};
            container['text'] = island.name;
            container['value'] = island._id;
            return container;
        });
        const selectedIsland = this.state.island !== '' ? this.state.dataIslands.find(island => island._id === this.state.island) : undefined;
        const ratings = this.state.dataRatings;
        return (
            <Segment>
                <SearchControls regions={regions} islands={islands} handleSelection={this.handleChange}/>
                {selectedIsland !== undefined && <IslandDetails island={selectedIsland} ratings={ratings}/>}
                {selectedIsland !== undefined && <Segment>
                    <Map
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{height: `100%`}}/>}
                        location={selectedIsland.location}
                        containerElement={<div style={{height: `400px`}}/>}
                        mapElement={<div style={{height: `100%`}}/>}
                    />
                </Segment>}
            </Segment>
        );
    }
}

export default App;
