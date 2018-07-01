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

        const form = <form action="">
            {formElementsArray.map(formElement => (
                <Input key={formElement.id}
                       name={formElement.id}
                       value={formElement.config.value}
                       placeholder={formElement.config.placeholder}
                       type={formElement.config.type}/>))}

                       <div className={'form-control contact-inputs-wrap btn-wrap'}>
                           <button type="submit" className="btn btn-primary">Send</button>
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


export default ContactForm;