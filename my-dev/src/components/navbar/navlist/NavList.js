import React from 'react';
import styles from './NavList.module.css'
import {Link} from "react-router-dom";

const NavList = () => {
    return (<div className={styles.navlist}>
            <div>
                <Link to="/">My codes</Link>
            </div>
            <div>
                <Link to="/things">Things</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default NavList;