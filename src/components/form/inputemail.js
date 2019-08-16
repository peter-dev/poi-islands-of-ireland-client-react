import React from 'react';
import {Form} from "semantic-ui-react";

const CustomInputEmail = ({name, label, value, handleChange}) => {
        return (
            <Form.Input
                icon='user'
                iconPosition='left'
                required
                label={label}
                placeholder={label}
                type='email'
                name={name}
                value={value}
                onChange={handleChange}
            />
        )

};

export default CustomInputEmail;