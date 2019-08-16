import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Button, Divider, Grid, Header, Icon, Segment, Dropdown} from 'semantic-ui-react';

class SearchControls extends Component {
    handleChange = (e, {name, value}) => {
        // handle dropdown change, execute callback method from App component
        this.props.handleSelection(name, value);
    };

    render() {
        const {regions, islands} = this.props;
        return (
            <Segment placeholder>
                <Grid columns={2} stackable textAlign='center'>
                    <Divider vertical>Or</Divider>

                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Header icon>
                                <Icon name='search'/>
                                Find Island
                            </Header>
                            <Segment.Inline>
                                <Dropdown
                                    name='region'
                                    onChange={this.handleChange}
                                    options={regions}
                                    placeholder='Choose an option'
                                    selection
                                />
                                <Dropdown
                                    name='island'
                                    onChange={this.handleChange}
                                    options={islands}
                                    placeholder='Choose an option'
                                    selection
                                    disabled={this.props.islands.length < 1}
                                />
                            </Segment.Inline>
                        </Grid.Column>

                        <Grid.Column>
                            <Header icon>
                                <Icon name='world'/>
                                Add New Island
                            </Header>
                            <Button primary as={Link} to='/add'>Add POI</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default withRouter(SearchControls);