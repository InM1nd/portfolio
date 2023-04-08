import styles from './footer.module.scss'


const Footer = () => {
    return (
        <div className={styles.footer}>
        <a href="/">
            <p className={styles.footer_sub}>subscribe for newsletter</p>
        </a>
        <address className={styles.footer_address}>
        <p className={styles.footer_address_title}>contact</p>
        <ul className={styles.footer_address_list}>  
            <li className={styles.footer_address_link}><a href="mailto:hello@bcs.com">hello@bcs.com</a></li>
            <li className={styles.footer_address_link}><a href="tel:+31 999 999 ">+31 999 999</a></li>
        </ul>
        </address>
        </div>
    )
}

export default Footer 