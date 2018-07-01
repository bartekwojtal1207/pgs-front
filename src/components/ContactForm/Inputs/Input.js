import React, {Component} from 'react';

const input = (props) => {

    return (
        <input type={props.type}
               name={props.name}
               placeholder={props.placeholder}
               required={props.required}/>
    )
};


export default input;