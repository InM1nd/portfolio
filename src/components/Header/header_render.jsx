import styles from './header.module.scss'
import LOGO from '../../img/other/LOGO 2.png'


const Header = () => {
    return (
        <div className={styles.header}>
			<nav >
			 <ul className={styles.nav}>
			 	<li className={styles.nav_item}><button className={styles.nav_menu_btn}>Our Work</button></li>
				<li className={styles.nav_item} ><button className={styles.nav_menu_btn}>Services</button></li>
				<li className={styles.nav_item}  style={{ padding: '0 110px 0 150px', }}>
					<a href='/'>
					<img className={styles.nav_menu_logo} src={LOGO} alt='SPOLUKA'/>
					</a>
				</li>
				<li className={styles.nav_item}><button className={styles.nav_menu_btn}>About Us</button></li>
				<li className={styles.nav_item}><button className={styles.nav_menu_btn}>Contact Us</button></li>
			 </ul>
			</nav>	
		</div>
    )
}

export default Header 