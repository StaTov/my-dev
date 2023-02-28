import React from 'react';
import NavList from "./navlist/NavList";
import styles from './Nav.module.css'
const Nav = () => {
    return (
        <nav className={styles.nav}>
            <NavList/>
        </nav>
    );
};

export default Nav;