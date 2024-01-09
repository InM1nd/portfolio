import styles from './header.module.scss'
import React from 'react';
import { NavLink } from "react-router-dom";



const Header = () => {

    return (
        <div className={styles.header}>
			<div className={styles.menu_wrap}>
            <ul className={styles.menu}>
                <li className={styles.menu_link}>
                    <NavLink className={styles.menu_link_text} style={({isActive})=>{return {color: isActive? "#00b7ff" : ""}}} to="/portfolio/projects">
                        Projects
                    </NavLink>
                </li>
                <li className={styles.menu_link}>
                    <NavLink className={styles.menu_link_text} style={({isActive})=>{return {color: isActive? "#00b7ff" : ""}}} to="/portfolio/applications">
                        Apps
                    </NavLink>
                </li>
                <li className={styles.menu_link}>
                    <NavLink className={styles.menu_link_text} style={({isActive})=>{return {color: isActive? "#00b7ff" : ""}}} to="/portfolio/about">
                        About me
                    </NavLink>
                </li>
                <li className={styles.menu_link}>
                    <NavLink className={styles.menu_link_text}  style={({isActive})=>{return {color: isActive? "#00b7ff" : ""}}}to="/portfolio/greet">
                        Say hi
                    </NavLink>
                </li>
            </ul>
        </div>
		</div>
    )
}

export default Header 