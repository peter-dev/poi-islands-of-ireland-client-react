import React from 'react';
import {Message} from 'semantic-ui-react';

const CustomMessage = ({type, header, content}) => {

    return (
        <Message
            error={type === 'error'}
            warning={type === 'warning'}
            success={type === 'success'}
            header={header}
            content={content}
        />
    );
};

export default CustomMessage;