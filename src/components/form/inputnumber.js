import React from 'react';
import {Form} from "semantic-ui-react";

const CustomInputNumber = ({name, label, step, value, handleChange}) => {
    return (
        <Form.Input
            required
            label={label}
            placeholder={label}
            type='number'
            step={step}
            name={name}
            value={value}
            onChange={handleChange}
        />
    )
};

export default CustomInputNumber;