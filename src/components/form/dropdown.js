import React from 'react';
import {Form} from "semantic-ui-react";

const CustomDropdown = ({name, label, options, value, handleChange}) => {
    return (
        <Form.Dropdown
            required
            selection
            label={label}
            placeholder='Choose an option'
            name={name}
            options={options}
            value={value || ''}
            onChange={handleChange}
        />
    )
};

export default CustomDropdown;