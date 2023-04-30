import styles from './projects.module.scss'
import Teple from '../../../img/other/123.jpg'
// import ARROW from '../../../img/other/ARROW.png'
import ARROW from '../../../img/other/9TR5GzG5c.gif'

const Skeptic = () => {
    return (
      <section className={styles.projects}>
        <div className={styles.projects_wrapper}>
                    <div className={styles.projects_img_border}>
                      <img className={styles.projects_img} src={Teple} alt='PROJECT'/>
                  </div>
            <div className={styles.projects_filter}>
            <a className={styles.projects_filter_button}>branding</a>
                <a className={styles.projects_filter_button}>product dev</a>
                <a className={styles.projects_filter_button}>communication</a>
                <a className={styles.projects_filter_button}>strategy</a> 
                <a className={styles.projects_filter_button}>custom solution</a>        
            </div >
            <div className={styles.projects_describ}>
              <div className={styles.projects_describ_text}>
                <div  className={styles.projects_describ_title}>OILFACES </div >
                <div  className={styles.projects_describ_info}>CREATING A PRACTICAL FITNESS PLATFORM</div >
              </div>
            </div>
            </div>
      </section>
      
    )
  }
  
  export default Skeptic