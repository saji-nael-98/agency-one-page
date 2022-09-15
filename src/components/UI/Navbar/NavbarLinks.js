import React from 'react';
import styles from './NavbarLinks.module.css'
import NavbarLink from "./NavbarLink";

function NavbarLinks(props) {

    return (
        <ul className={`${styles['navbar__links']} ${!props.open ? styles['navbar__links__close'] : ''}`}>
            <NavbarLink link={"/service"} label={'services'}/>
            <NavbarLink link={"/portfolio"} label={'portfolio'}/>
            <NavbarLink link={"/about"} label={'about'}/>
            <NavbarLink link={"/team"} label={'team'}/>
            <NavbarLink link={"/contact"} label={'contact'}/>
        </ul>
    );
}

export default NavbarLinks;