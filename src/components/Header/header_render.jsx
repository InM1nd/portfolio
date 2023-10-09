import styles from './header.module.scss'
import React from 'react';
import { Link } from "react-router-dom";
import BUTTON from '../../img/other/BUTTON.png'


const Header = () => {
    return (
        <div className={styles.header}>
			<div className={styles.header_logo}> 
				{/* <Link className={styles.header_logo}  to="/portfolio/">inm1nd</Link> */}
			</div>
			<div className={styles.menu_wrap}>
            <ul className={styles.menu}>
                <li className={styles.menu_link}><Link className={styles.menu_link_text} to="/portfolio/projects">Projects</Link></li>
                <li className={styles.menu_link}><Link className={styles.menu_link_text} to="/portfolio/applications">Apps</Link></li>
                <li className={styles.menu_link}><Link className={styles.menu_link_text} to="/portfolio/about">About me</Link></li>
                <li className={styles.menu_link}><Link className={styles.menu_link_text} to="/portfolio/greet">Say hi</Link></li>
            </ul>
        </div>
		</div>
    )
}

export default Header 