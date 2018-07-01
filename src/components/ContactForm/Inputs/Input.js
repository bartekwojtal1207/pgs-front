import React, {Component} from 'react';
import './Inputs.css';

const input = (props) => {
    return (
        <div className={'form-control contact-inputs-wrap'}>
            <input type={props.type}
                   name={props.name}
                   className={'contact-inputs'}
                   placeholder={props.placeholder}
                   required={props.required}/>
        </div>

    )
};


export default input;