import React from 'react';
import {Form} from "semantic-ui-react";

const CustomInputPassword = ({name, label, value, handleChange}) => {
        return (
            <Form.Input
                icon='lock'
                iconPosition='left'
                required
                label={label}
                placeholder={label}
                type='password'
                name={name}
                value={value}
                onChange={handleChange}
            />
        )

};

export default CustomInputPassword;