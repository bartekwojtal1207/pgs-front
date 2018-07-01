import React, {Component} from 'react';
import Input from './Inputs/Input';

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

        let input = null;

        const form = <form action="">
            {console.log(formElementsArray)}
            {formElementsArray.map(formElement => {

                <Input key={formElement.id}
                       name={formElement.id}
                       value={formElement.config.value}
                       placeholder={formElement.config.placeholder}
                       type={formElement.config.type}/>})
            }
        </form>;

        return (
            <div className={'form-container'}>
                {form}
            </div>
        )
    }
}


export default ContactForm;