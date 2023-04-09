import styles from './footer.module.scss'


const Footer = () => {
    return (
        <div className={styles.footer}>
            <a href='/'>
            <div className={styles.talk_btn}>
                <p className={styles.talk_btn_text}>Say hi</p>
            </div>
            </a>
        <div className={styles.footer_info}>    
        <ul className={styles.footer_address_list}>
            <li className={styles.footer_address_link}><a>Instagram</a></li>
            <li className={styles.footer_address_link}><a>behance</a></li>
            <li className={styles.footer_address_link}><a>linkedin</a></li>
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