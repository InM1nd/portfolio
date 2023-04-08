import styles from './header.module.scss'


const Header = () => {
    return (
        <div className={styles.header}>
			<nav >
			 <ul className={styles.nav}>
			 <li className={styles.nav_item}><button className={styles.nav_menu_btn}>Home</button></li>
				<li className={styles.nav_item}><button className={styles.nav_menu_btn}>Cases</button></li>
				<li className={styles.nav_item}><button className={styles.nav_menu_btn}>Method</button></li>
				<li className={styles.nav_item}><button className={styles.nav_menu_btn}>About</button></li>
				<li className={styles.nav_item}><button className={styles.nav_menu_btn}>Contacts</button></li>
			 </ul>
			</nav>	
		</div>
    )
}

export default Header 