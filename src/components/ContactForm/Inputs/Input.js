import React, {Component} from 'react';
import './Inputs.css';
import validator from 'react-validation';

const input = (props) => {
    // console.log(props.required)
    return (
        <div className={'form-control contact-inputs-wrap'}>
            <input type={props.type}
                   onChange={props.changed}
                   name={props.name}
                   className={'contact-inputs'}
                   placeholder={props.placeholder}
                   required={props.required}/>
        </div>

    )
};


export default input;