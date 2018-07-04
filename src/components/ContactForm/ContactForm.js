import React, {Component} from 'react';
import Input from './Inputs/Input';
import './ContactForm.css';

class ContactForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            contactForm: {
                ...props.formElement,
            }
        }
    }

    inputChangedHandler = (event, inputId) => {
        const contactFormToUpdate = {
            ...this.state.contactForm
        }, FormElementToUpdate = {
            ...contactFormToUpdate[inputId]
        };

        FormElementToUpdate.value = event.target.value;
        contactFormToUpdate[inputId] = FormElementToUpdate;

        this.setState({contactForm: contactFormToUpdate});
    };

    checkValidate(form) {
        let formIsValid = true;

        form.map(elementValid => {
            formIsValid = elementValid.config.accept && formIsValid;
        });

        if (formIsValid) {
            alert('wysłano formularz !')
        }
    };

    formSubmitHandler = (event) => {
        event.preventDefault();

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

        formElementsArray.map(formElement => {
            let isRequired = formElement.config.required,
                emptyValue = formElement.config.value.toString().trim().length < 1,
                mailType = formElement.config.type === 'email',
                mailFormat = formElement.config.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

            formElement.config.accept = true;

            if (mailType && !mailFormat) {
                formElement.config.accept = false;
                formElement.config.errorMessage = 'podaj prawidłowy format adresu email.';
            }
            if (isRequired && emptyValue) {
                formElement.config.accept = false;
                formElement.config.errorMessage = 'to pole jest wymagane.';
            }
        });

        this.checkValidate(formElementsArray);
        this.setState({contactForm: contactForm});
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

        const form = <form className={'form-contact'}>
            {formElementsArray.map(formElement => (
                <Input key={formElement.id}
                       name={formElement.id}
                       value={formElement.config.value}
                       validation={formElement.config.validation}
                       placeholder={formElement.config.placeholder}
                       type={formElement.config.type}
                       required={formElement.config.required}
                       changed={(event) => this.inputChangedHandler(event, formElement.id)}
                       errorMessage={formElement.config.errorMessage}
                       accept={formElement.config.accept}
                />
            ))}

            <div className={'form-control contact-inputs-wrap btn-wrap'}>
                <button type="submit" className="btn btn-primary"
                        onClick={(event) => this.formSubmitHandler(event)}>SEND
                </button>
            </div>
        </form>;

        return (
            <div className={'form-container align-items-center row'}>
                <div className={'offset-xs-2 col-xs-8 offset-sm-3 col-sm-6 offset-md-3 col-md-6 offset-xl-4 col-xl-4'}>
                    { form }
                </div>
            </div>
        )
    }
}


export default ContactForm;