import styles from './projects.module.scss'
// import Teple from '../../../img/other/123.jpg'
import Teple from '../../../img/other/Skelya.png'

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
                <div  className={styles.projects_describ_info}>CAREER DEVELOPMENT PLATFORM</div >
              </div>
            </div>   
            <div className={styles.projects_filter}>
                <div className={styles.projects_filter_button}>HTML</div>
                <div className={styles.projects_filter_button}>SCSS</div>
                <div className={styles.projects_filter_button}>JS</div>
                <div className={styles.projects_filter_button}>WordPress</div>    
            </div >
            <div className={styles.projects_content_descib}>
                    <div className={styles.projects_content_paragraph}>
                      Our friends approached us with an exciting startup idea and needed help launching it. 
                      They envisioned a career service targeting young professionals and job switchers which is currently an underrepresented niche.
                      My mission is gonna be to create landing page with couple of pages.
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
  
  export default Skelya