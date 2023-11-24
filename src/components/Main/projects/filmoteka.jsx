import styles from './projects.module.scss'
// import Teple from '../../../img/other/123.jpg'
import Teple from '../../../img/other/Filmoteka.png'

const Filmoteka = () => {
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
                <div  className={styles.projects_describ_title}>FILMOTEKA</div >
                <div  className={styles.projects_describ_info}>FILM TRACKER</div >
              </div>
            </div>   
            <div className={styles.projects_filter}>
                <div className={styles.projects_filter_button}>HTML</div>
                <div className={styles.projects_filter_button}>SCSS</div>
                <div className={styles.projects_filter_button}>JS</div>
                <div className={styles.projects_filter_button}>FireBase</div>
                <div className={styles.projects_filter_button}>MovieDB API</div>    
            </div >
            <div className={styles.projects_content_descib}>
                    <div className={styles.projects_content_paragraph}> Team project. My tasks were to work with the API, render list of 
                        cards, pull up genres, ratings. I also made up the modal window of our team, 
                        helped with edits in all parts of the project, including the implementation 
                        of changing the language on the site.
                    </div>
                    {/* <div className={styles.projects_content_paragraph}> No blue — no color: all other colors may be created only by mixing blue, red and green. Web is pure blue: from the
                    first site by CERN till now. Why not to create another beatiful site?
                    </div> */}
            </div>
            <div className={styles.projects_button_wrapper}>
              <a className={styles.projects_button} href='https://okolobaha-me.github.io/quentin-filmotino/#en
'>
                Learn more
              </a>
            </div>
            </div>
            </div>  
      </section>
      
    )
  }
  
  export default Filmoteka