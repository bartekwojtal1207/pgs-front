import React, {Component} from 'react';
import './Inputs.css';
import Aux from '../../../hoc/Auxs';


const input = (props) => {

    return (
        <Aux>
            <div className={'form-control contact-inputs-wrap'}>
                <input type={props.type}
                       onChange={props.changed}
                       name={props.name}
                       className={'contact-inputs'}
                       placeholder={props.placeholder}
                       required={props.required}/>
                {(props.required) && (props.value.trim('') === '') ? <span className={'text-danger required-sybmol'}>*</span> : '' }
                {!props.accept ?  <p className={'text-danger'} >{props.errorMessage}</p> :  ''}
            </div>
        </Aux>
    )
};


export default input;