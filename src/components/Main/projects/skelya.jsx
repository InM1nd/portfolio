import styles from './projects.module.scss'
// import Teple from '../../../img/other/123.jpg'
import Teple from '../../../img/other/Skeptic.jpg'

const Skelya = () => {
    return (
      <section className={styles.section}>
        <div className={styles.projects_wrapper}>
                    <div className={styles.projects_img_border}>
                      <div className={styles.projects_img_wrapper}>
                      <img className={styles.projects_img} src={Teple} alt='PROJECT'/>
                      </div>
                  </div>
            <div  className={styles.projects_content}>
            <div className={styles.projects_describ}>
              <div className={styles.projects_describ_text}>
                <div  className={styles.projects_describ_title}>SKELYA</div >
                <div  className={styles.projects_describ_info}>CREATING A PRACTICAL FITNESS PLATFORM</div >
              </div>
            </div>   
            <div className={styles.projects_filter}>
            <a className={styles.projects_filter_button}>branding</a>
                <a className={styles.projects_filter_button}>product dev</a>
                <a className={styles.projects_filter_button}>communication</a>
                <a className={styles.projects_filter_button}>strategy</a> 
                <a className={styles.projects_filter_button}>custom solution</a>        
            </div >
            <div className={styles.projects_content_descib}>
                    <div className={styles.projects_content_paragraph}>Blue is perfect. It’s the most popular and the most relaxing colour. Blue is also the base of the color spectrum. No blue — no color: all other colors may be 
                    created only by mixing blue, red and green. Web is pure blue: from the first site by CERN till now. Why not to create another beatiful site?
                    </div>
                    {/* <div className={styles.projects_content_paragraph}> No blue — no color: all other colors may be created only by mixing blue, red and green. Web is pure blue: from the
                    first site by CERN till now. Why not to create another beatiful site?
                    </div> */}
            </div>
            <div className={styles.projects_button_wrapper}>
              <a className={styles.projects_button}>
                Learn More
              </a>
            </div>
            </div>
            </div>  
      </section>
      
    )
  }
  
  export default Skelya