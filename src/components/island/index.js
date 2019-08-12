import React from 'react';
import {Segment, Item, Icon} from 'semantic-ui-react';
import {calculateAverageRating} from '../../utils/utility';

const IslandDetails = ({island, ratings}) => {
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
                            <span>Latitude: {island.location.lat}, Longitude: {island.location.lng}</span>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    );
};

export default IslandDetails;