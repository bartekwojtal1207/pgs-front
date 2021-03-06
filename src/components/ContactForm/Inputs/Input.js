import React, {Component} from 'react';
import './Inputs.css';
import Aux from '../../../hoc/Auxs';

const input = (props) => {
    let requriedSymbol, errorMessage = null;

    if((props.required) && (props.value.trim('') === '')){
        requriedSymbol = <span className={'text-danger required-sybmol'}>*</span>;
    }
    if(!props.accept) {
        errorMessage = <p className={'text-danger'} >{props.errorMessage}</p>;
    }

    return (
        <Aux>
            <div className={'form-control contact-inputs-wrap'}>
                <input type={props.type}
                       onChange={props.changed}
                       name={props.name}
                       className={'contact-inputs'}
                       placeholder={props.placeholder}
                       required={props.required}/>
                { requriedSymbol }
                { errorMessage }
            </div>
        </Aux>
    )
};


export default input;