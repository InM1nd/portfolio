import styles from './projects.module.scss'
import PROJECT from '../../../img/other/PROJECT.png'
// import ARROW from '../../../img/other/ARROW.png'
import ARROW from '../../../img/other/9TR5GzG5c.gif'

const Projects = () => {
    return (
      <section className={styles.projects}>
        <div className={styles.projects_content}>
            {/* <h1 className={styles.projects_title}>Featured</h1> */}
            <div className={styles.projects_img_border}>
                <img className={styles.projects_img} src={PROJECT} alt='PROJECT'/>
            </div>
            <ul className={styles.projects_filter}>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>naming</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>strategy</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>communication</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>website</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>branding</button></li>
            </ul>
        </div>
        <div className={styles.projects_describ}>
        <div className={styles.projects_describ_text}>
        <h2 className={styles.projects_describ_title}>SKEPTIK
          <p className={styles.projects_describ_info}>CREATING A PRACTICAL FITNESS PLATFORM</p>
        </h2>
        </div>
        <div className={styles.projects_describ_arrow_wrapper}>
        <a  href='/'><img className={styles.projects_describ_arrow} src={ARROW}/></a>
        </div>
        </div>
      </section>
      
    )
  }
  
  export default Projects