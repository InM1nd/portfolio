import styles from './footer.module.scss'


const Footer = () => {
    return (
        <div className={styles.footer}>
        <div className={styles.footer_info}>    
        <ul className={styles.footer_address_list}>
            <li className={styles.footer_address_link}><a href='/'>instagram</a></li>
            <li className={styles.footer_address_link}><a href='/'>behance</a></li>
            <li className={styles.footer_address_link}><a href='/'>linkedin</a></li>
        </ul>
        <address className={styles.footer_address}>
        {/* <p className={styles.footer_address_title}>contact</p> */}
        <ul className={styles.footer_address_list}>  
            <li className={styles.footer_address_link}><a href="mailto:hello@bcs.com">hello@bcs.com</a></li>
            <li className={styles.footer_address_link}><a href="tel:+31 999 999 ">+31 999 999</a></li>
        </ul>
        </address>
        </div>
        </div>
    )
}

export default Footer 