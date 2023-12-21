import styles from './projects.module.scss'
// import Teple from '../../../img/other/123.jpg'
import Teple from '../../../img/other/Oilfaces.png'

const Oilfaces = () => {
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
                <div  className={styles.projects_describ_title}>OILFACES</div >
                <div  className={styles.projects_describ_info}>Studio WebSite</div >
              </div>
            </div>   
            <div className={styles.projects_filter}>
                <div className={styles.projects_filter_button}>React</div>
                <div className={styles.projects_filter_button}>Three.js</div>
                <div className={styles.projects_filter_button}>Styled Components</div>
                <div className={styles.projects_filter_button}>Cloud Server Deploy</div>     
            </div >
            <div className={styles.projects_content_descib}>
                    <div className={styles.projects_content_paragraph}>
                      Developing creative agency landing page using React + Vite, Three.js for 3D interactive elements 
                      and deploy it using cloud services.
                    </div>
            </div>
            <div className={styles.projects_button_wrapper}>
              <a className={styles.projects_button} href='https://inm1nd.github.io/agency_/'>
                Learn More
              </a>
            </div>
            </div>
            </div>  
      </section>
      
    )
  }
  
  export default Oilfaces