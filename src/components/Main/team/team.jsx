import styles from './team.module.scss'
import SANYA from '../../../img/other/123.jpg'


const Team = () => {
    return ( 
        <section className={styles.team}>
                    <div className={styles.team_card}>
                        <div className={styles.team_card_img_wrapper}>
                        <img className={styles.team_card_img} src={SANYA}/> 
                        </div>
                        <div className={styles.team_card_fill}>
                            <h2 className={styles.team_card_name}>ALEX</h2>
                            <div className={styles.team_card_text_wrapper}>
                                <p className={styles.team_card_text}>WEB DEVELOPER</p>
                                <p className={styles.team_card_text}>CREATIVE CODER</p>
                            </div>
                            
                        </div>
                    </div>
        </section>
        )
    }
    
    export default Team