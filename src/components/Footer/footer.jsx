import styles from './footer.module.scss'


const Footer = () => {
    return (
        <div className={styles.footer}>
        
        <div className={styles.wrapper}>
       
        <ul className={styles.footer_list}>
            <li className={styles.footer_link}><a className={styles.footer_link_text} href='https://www.instagram.com/sanchezbltn/'>instagram</a></li>
            <li className={styles.footer_link}><a className={styles.footer_link_text} href='https://www.linkedin.com/in/oleksandr-zabolotnyi1/'>linkedin</a></li>
            <li className={styles.footer_link}><a className={styles.footer_link_text} href="https://t.me/InM1nd">telegram</a></li>
            <li className={styles.footer_link}><a className={styles.footer_link_text} href="tel:+4367764403404">+4367764403404</a></li>
        </ul>
        </div>
       
        </div>
    )
}

export default Footer 