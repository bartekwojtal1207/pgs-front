import React, {Component} from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';


class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formElement: {
                name: {
                    required: true,
                    value: '',
                    placeholder: 'Name',
                    type: 'text'
                },
                email: {
                    required: true,
                    value: '',
                    placeholder: 'Email',
                    type: 'email',
                },
                message: {
                    required: false,
                    value: '',
                    placeholder: 'Message',
                    type: 'text'
                }
            }
        }
    }

    render() {
        return(
           <ContactForm formElement={this.state.formElement}/>
        )
    }
}


export default Contact
