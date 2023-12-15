import styles from './projects.module.scss'
// import Teple from '../../../img/other/123.jpg'
import Teple from '../../../img/other/Skeptic.jpg'

const Skeptic = () => {
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
                <div  className={styles.projects_describ_title}>SKEPTIC</div >
                <div  className={styles.projects_describ_info}>FITNESS PLATFORM</div >
              </div>
            </div>   
            <div className={styles.projects_filter}>
              <div className={styles.projects_filter_button}>WIX</div>
              <div className={styles.projects_filter_button}>WIX SOLUTION</div>
              <div className={styles.projects_filter_button}>UX|UI Design</div>         
            </div >
            <div className={styles.projects_content_descib}>
                    <div className={styles.projects_content_paragraph}>
                      For the past ten years, Roman has explored various areas of sports and health, from fitness and martial arts to rehabilitation and nutrition. 
                      He's developed his own fitness approach and has been teaching it for the past few years. 
                      Now, he's ready to start a fitness platform to teach his methods to a wider audience.
                    </div>
                    {/* <div className={styles.projects_content_paragraph}> No blue — no color: all other colors may be created only by mixing blue, red and green. Web is pure blue: from the
                    first site by CERN till now. Why not to create another beatiful site?
                    </div> */}
            </div>
            <div className={styles.projects_button_wrapper}>
              <a className={styles.projects_button} href='/'>
                In Progress
              </a>
            </div>
            </div>
            </div>  
      </section>
      
    )
  }
  
  export default Skeptic