import React from 'react';
import Teams from "../Teams/Teams";
import Companies from "../compaines/Companies";
import ContactUs from "../ContactUs/ContactUs";

function Main(props) {
    return (
        <main>
            <Teams/>
            <Companies/>
            <ContactUs/>
        </main>
    );
}

export default Main;