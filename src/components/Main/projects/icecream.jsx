import styles from './projects.module.scss'
// import Teple from '../../../img/other/123.jpg'
import Teple from '../../../img/other/IceCream.png'

const IceCream = () => {
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
                <div  className={styles.projects_describ_title}>Ice Cream</div >
                <div  className={styles.projects_describ_info}>Landing Page</div >
              </div>
            </div>   
            <div className={styles.projects_filter}>
                <div className={styles.projects_filter_button}>HTML</div>
                <div className={styles.projects_filter_button}>SCSS</div>
                <div className={styles.projects_filter_button}>JS</div>   
            </div >
            <div className={styles.projects_content_descib}>
                    <div className={styles.projects_content_paragraph}> 
                        Group project. I was responsible for the Contacts part. We also 
                        used basic HTML for layout, CSS (SCSS) for styles and JS scipts for modal 
                        windows
                    </div>
                    {/* <div className={styles.projects_content_paragraph}> No blue — no color: all other colors may be created only by mixing blue, red and green. Web is pure blue: from the
                    first site by CERN till now. Why not to create another beatiful site?
                    </div> */}
            </div>
            <div className={styles.projects_button_wrapper}>
              <a className={styles.projects_button} href='https://hordiienkoolha.github.io/ice-cream/'>
                Learn more
              </a>
            </div>
            </div>
            </div>  
      </section>
      
    )
  }
  
  export default IceCream