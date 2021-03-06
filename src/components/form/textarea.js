import React from 'react';
import {Form} from "semantic-ui-react";

const CustomTextArea = ({name, label, value, handleChange}) => {
    return (
        <Form.TextArea
            required
            rows={6}
            label={label}
            placeholder={label}
            name={name}
            value={value}
            onChange={handleChange}
        />
    )
};

export default CustomTextArea;