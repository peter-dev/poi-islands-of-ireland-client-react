import React from 'react';
import {withRouter} from 'react-router-dom';
import {Segment, Item, Icon, Button} from 'semantic-ui-react';
import {calculateAverageRating} from '../../utils/utility';
import {Link} from "react-router-dom";

const IslandDetails = ({island, ratings}) => {
    // compute average rating from the list of rating and render island details
    const avgRating = calculateAverageRating(ratings);
    return (
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header as='h3'>{island.name}</Item.Header>
                        <Item.Meta>
                            {ratings.length > 0
                                ? <Icon name='check' color='green'/>
                                : <Icon name='check' color='red'/>
                            }
                            <span>{ratings.length} Votes</span>
                            {avgRating > -1 && <span>{avgRating} Average Rating</span>}
                        </Item.Meta>
                        <Item.Description>
                            {island.description}
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' as={Link} to={`/edit/${island._id}`}>Edit</Button>
                            <Icon name='globe'/>
                            <span>Latitude: {island.location.lat}, Longitude: {island.location.lng}</span>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    );
};

export default withRouter(IslandDetails);