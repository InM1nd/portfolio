import React, { useRef, useEffect } from 'react';
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

import styles from './main_nav.module.scss'

const Main_Nav = () => {

    return(
        <div className={styles.main_nav}>
        <div className={styles.menu_wrap}>
            <ul className={styles.menu}>
                <li className={styles.menu_link}><Link className={styles.menu_link_text}  to="/projects">Projects</Link></li>
                <li className={styles.menu_link}><Link className={styles.menu_link_text} to="/services">Services</Link></li>
                <li className={styles.menu_link}><Link className={styles.menu_link_text} to="/about">About us</Link></li>
                <li className={styles.menu_link}><Link className={styles.menu_link_text} to="/greet">Say hi</Link></li>
            </ul>
        </div>
        <div className={styles.main_outlet}> 
        {/* <Suspense>
        <Outlet className={styles.main_outlet_color}/>
        </Suspense> */}
        </div>
        </div>
    )
};

export default Main_Nav


