import React from 'react';
import {Segment, Header, Icon} from 'semantic-ui-react';

const NotFound = () => (
    // render not found page
    <Segment>
        <Header as='h2' icon textAlign='center'>
            <Icon name='times circle'/>
            404
            <Header.Subheader>Page Not Found</Header.Subheader>
        </Header>
    </Segment>
);

export default NotFound;