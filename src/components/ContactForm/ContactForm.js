import React, {Component} from 'react';
import Input from './Inputs/Input';
import PropTypes from 'prop-types';
import validator from 'react-validation';

import './ContactForm.css';

class ContactForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            contactForm: {
                ...props.formElement
            }
        }
    }

    inputChangedHandler = (event, inputId) => {

        const contactFormToUpdate  = {
            ...this.state.contactForm
        }, FormElementToUpdate = {
            ...contactFormToUpdate[inputId]
        };

        // console.log(contactFormToUpdate)
        // console.log(FormElementToUpdate)

        FormElementToUpdate.value = event.target.value;

        // FormElementToUpdate.valid = this.checkValidity(FormElementToUpdate ,FormElementToUpdate.value, FormElementToUpdate.validation);
        // FormElementToUpdate.touched = true;
        contactFormToUpdate[inputId] = FormElementToUpdate;

        let formIsValid = true;

        for (let inputId in contactFormToUpdate) {
            formIsValid = contactFormToUpdate[inputId].valid && formIsValid;
        }

        this.setState({contactForm: contactFormToUpdate});
    };

    checkValidity = (element, value, rules) => {
        let isValid = true;
        value = element.target.value
        // console.log(value)

        const email = (value) => {
            if (!validator.isEmail(value)) {

                return `${value} is not a valid email.`
            }
        };

        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if ((element.elementType === 'checkbox') && (!element.checked)) {
            isValid = false;
        }
        // console.log(element, rules)
        return isValid;
    };

    formSubmit = (event) => {
        const formElementsArray = [];
        const contactForm = {
            ...this.state.contactForm
        };

        for (let key in contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            });
        }
        formElementsArray.map(formElement => {
            let isRequired = formElement.config.required,
                emptyValue = formElement.config.value.toString().trim().length < 1,
                mailType = formElement.config.type === 'email',
                mailFormat = formElement.config.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

            if (isRequired && emptyValue) {
                console.log(formElement)
            }
            if (mailType && !mailFormat) {
                console.log(formElement)
            }
            
        });

        event.preventDefault()

    };


    render() {
        const formElementsArray = [],
              contactForm = {
                  ...this.state.contactForm
              };

        for (let key in contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            });
        }

        const form = <form>
            {formElementsArray.map(formElement => (
                <Input key={formElement.id}
                       name={formElement.id}
                       value={formElement.config.value}
                       validation={formElement.config.validation}
                       placeholder={formElement.config.placeholder}
                       type={formElement.config.type}
                       required={formElement.config.required}
                       changed={(event) => this.inputChangedHandler(event, formElement.id)}
                />))}

            <div className={'form-control contact-inputs-wrap btn-wrap'}>
                <button type="submit" className="btn btn-primary" onClick={(event) => this.formSubmit(event)}>Send</button>
            </div>
        </form>;

        return (
            <div className={'form-container align-items-center row'}>
                <div className={'offset-md-4 col-md-4'}>
                    { form }
                </div>

            </div>
        )
    }
}
ContactForm.propTypes = {
    value: PropTypes.bool.isRequired
}

export default ContactForm;