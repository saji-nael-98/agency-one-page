import React, {useState} from 'react';
import './ContactForm.css'
import Button from "../UI/Button/Button";

const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: ''
}


function ContactForm(props) {
    const [formValues, setFormValues] = useState(initialValues);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isMessageValid, setIsMessageValid] = useState(true);

    const changeNameHandler = (event) => {
        if (event.target.value.trim().length === 0) {
            setIsNameValid(false)
        } else
            setIsNameValid(true)
        setFormValues((prevState) => {
            return {
                ...prevState,
                name: event.target.value
            }
        })
    }
    const changeEmailHandler = (event) => {
        if (event.target.value.trim().length === 0) {
            setIsEmailValid(false)
        } else
            setIsEmailValid(true)
        setFormValues((prevState) => {
            return {
                ...prevState,
                email: event.target.value
            }
        })
    }
    const changePhoneHandler = (event) => {
        if (event.target.value.trim().length === 0) {
            setIsPhoneValid(false)
        } else
            setIsPhoneValid(true)
        setFormValues((prevState) => {
            return {
                ...prevState,
                phone: event.target.value
            }
        })
    }
    const changeMessageHandler = (event) => {
        if (event.target.value.trim().length === 0) {
            setIsMessageValid(false)
        } else
            setIsMessageValid(true)
        setFormValues((prevState) => {
            return {
                ...prevState,
                message: event.target.value
            }
        })
    }
    return (
        <form>
            <div className={'contact-us__controls'}>
                <div className={'contact-us__user_details'}>
                    <div className={'contact-us__control'}>
                        <label>Name</label>
                        <input placeholder={'enter your name'} onChange={changeNameHandler} value={formValues.name}/>
                        {!isNameValid && <div className={'error'}>
                            <p>
                                required
                            </p>
                        </div>}

                    </div>
                    <div className={'contact-us__control'}>
                        <label>Email</label>
                        <input placeholder={'enter your email'} onChange={changeEmailHandler} value={formValues.email}/>
                        {!isEmailValid && <div className={'error'}>
                            <p>
                                required
                            </p>
                        </div>}
                    </div>
                    <div className={'contact-us__control'}>
                        <label>Phone</label>
                        <input placeholder={'enter your phone'} onChange={changePhoneHandler} value={formValues.phone}/>
                        {!isPhoneValid && <div className={'error'}>
                            <p>
                                required
                            </p>
                        </div>}
                    </div>
                </div>
                <div className={'contact-us__user_message'}>
                    <div className={'contact-us__control'}>
                        <label>Message</label>
                        <textarea placeholder={'please enter your message...'} onChange={changeMessageHandler}
                                  value={formValues.message}></textarea>
                        {!isMessageValid && <div className={'error'}>
                            <p>
                                required
                            </p>
                        </div>}
                    </div>
                </div>
                <div className={'contact-us__action'}>
                    <Button>
                        submit
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default ContactForm;