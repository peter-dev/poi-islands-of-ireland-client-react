import React from 'react';
import {Form} from "semantic-ui-react";

const CustomInputText = ({name, label, type, value, handleChange}) => {
        return (
            <Form.Input
                required
                label={label}
                placeholder={label}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
            />
        )

};

export default CustomInputText;