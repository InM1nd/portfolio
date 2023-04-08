import styles from './projects.module.scss'
import PROJECT from '../../../img/other/PROJECT.png'

const Projects = () => {
    return (
      <section className={styles.projects}>
        <div>
            <h1 className={styles.projects_title}>Cases</h1>
            <ul className={styles.projects_filter}>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>naming</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>strategy</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>communication</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>website</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>branding</button></li>
            </ul>
            <div className={styles.projects_img_border}>
                <img className={styles.projects_img} src={PROJECT} alt='PROJECT'/>
                <h2 className={styles.projects__describ}> <strong>SKEPTIK</strong>: CREATING A PRACTICAL FITNESS PLATFORM</h2>
            </div>
        </div>
      </section>
      
    )
  }
  
  export default Projects