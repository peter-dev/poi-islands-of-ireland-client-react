import React from 'react';
import {Message} from 'semantic-ui-react';

const ErrorMessage = ({message}) => {

    return (
        <Message
            error
            header='There was a problem...'
            content={message}
        />
    );
};

export default ErrorMessage;