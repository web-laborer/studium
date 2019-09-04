import React from 'react';
import { read } from 'fs';

const validation = (props) => {
    const style = {
        color:'red'
    };

    let validationMessage = '';
    if (props.inputLength.length < 5 ) validationMessage  = 'text is too short';
    if (props.inputLength.length > 10 ) validationMessage  = 'text is too long';
    return (
        <div style={style}>
            <p>{validationMessage}</p>
        </div>
    )
};
export default validation;