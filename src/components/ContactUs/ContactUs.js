import React from 'react';
import styles from './ContactUs.module.css'
import ContactForm from "./ContactForm";
import Section from "../UI/Section/Section";

function ContactUs(props) {
    return (
        <Section id={styles['contact-us']} title={'CONTACT US'} description={'Lorem ipsum dolor sit amet consectetur.'}>
           <ContactForm/>
        </Section>
    );
}

export default ContactUs;