import React from 'react';
import styles from './Header.module.css'
import Button from "../UI/Button/Button";
import Navbar from "../UI/Navbar/Navbar";

const Header = () => <div className={styles['header']}>
    <div className={styles['intro']}>
        <Navbar/>
        <h2>
            welcome to our website!
        </h2>
        <h1>
            IT'S NICE TO MEET YOU
        </h1>
        <div className={styles['intro__btn']}>
            <Button>
                tell me more
            </Button>
        </div>
    </div>
</div>

export default Header;