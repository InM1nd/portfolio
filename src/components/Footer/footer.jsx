import styles from './footer.module.scss'


const Footer = () => {
    return (
        <div className={styles.footer}>
        
        <div className={styles.wrapper}>
       
        <ul className={styles.footer_list}>
            <li className={styles.footer_link}><a className={styles.footer_link_text} href='/'>instagram</a></li>
            <li className={styles.footer_link}><a className={styles.footer_link_text} href='/'>linkedin</a></li>
            <li className={styles.footer_link}><a className={styles.footer_link_text} href="mailto:hello@bcs.com">hello@bcs.com</a></li>
            <li className={styles.footer_link}><a className={styles.footer_link_text} href="tel:+31 999 999 ">+31 999 999</a></li>
        </ul>
        </div>
       
        </div>
    )
}

export default Footer 