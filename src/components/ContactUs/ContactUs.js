import React from 'react';
import './ContactUs.css'
import ContactForm from "./ContactForm";
import Section from "../UI/Section/Section";

function ContactUs(props) {
    return (
        <Section id={'contact'} title={'CONTACT US'} description={'Lorem ipsum dolor sit amet consectetur.'} className={'contact-us'}>
           <ContactForm/>
        </Section>
    );
}

export default ContactUs;