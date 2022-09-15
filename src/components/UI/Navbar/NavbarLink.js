import React from 'react';
import styles from './NavbarLink.module.css'
function NavbarLink(props) {
    return (
        <li className={styles['navbar__link']}>
            <a href={props.link}>
                {props.label}
            </a>
        </li>
    );
}

export default NavbarLink;