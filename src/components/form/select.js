import React from 'react';
import {Form} from "semantic-ui-react";

const CustomSelect = ({name, label, options, handleChange}) => {
    return (
        <Form.Select
            required
            label={label}
            placeholder='Choose an option'
            name={name}
            options={options}
            onChange={handleChange}
        />
    )
};

export default CustomSelect;