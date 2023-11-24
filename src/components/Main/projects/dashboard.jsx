import styles from './projects.module.scss'
// import Teple from '../../../img/other/123.jpg'
import Teple from '../../../img/other/Dashboard.png'

const Dashboard = () => {
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
                <div  className={styles.projects_describ_title}>DASHBOARD</div >
                <div  className={styles.projects_describ_info}>CUSTOM ADMIN PANEL</div >
              </div>
            </div>   
            <div className={styles.projects_filter}>
                <div className={styles.projects_filter_button}>React</div>
                <div className={styles.projects_filter_button}>Material UI</div>
                <div className={styles.projects_filter_button}>Vite</div>       
            </div >
            <div className={styles.projects_content_descib}>
                    <div className={styles.projects_content_paragraph}> 
                    This application consists of Light and Dark Mode, 4 different Charts, 3 different Data Table Pages, FAQ Page, Form Page, and Calendar Integration.
                    Nivo Charts, Formik, Yup, FullCalendar, and Data Grid was used to build this application.
                    </div>
                    {/* <div className={styles.projects_content_paragraph}> No blue — no color: all other colors may be created only by mixing blue, red and green. Web is pure blue: from the
                    first site by CERN till now. Why not to create another beatiful site?
                    </div> */}
            </div>
            <div className={styles.projects_button_wrapper}>
              <a className={styles.projects_button} href='https://inm1nd.github.io/react_admin/'>
                Learn More
              </a>
            </div>
            </div>
            </div>  
      </section>
      
    )
  }
  
  export default Dashboard