import styles from './projects.module.scss'
import Teple from '../../../img/other/Nutrify.png'
// import Teple from '../../../img/other/Filmoteka.png'

const Nutrify = () => {
    return (
      <section className={styles.section}>
        <div className={styles.projects_wrapper}>
                    <div className={styles.projects_img_border}>
                      <div className={styles.projects_img_wrapper}>
                      <img className={styles.projects_img} src={Teple} alt='SOON..'/>
                      </div>
                  </div>
            <div  className={styles.projects_content}>
            <div className={styles.projects_describ}>
              <div className={styles.projects_describ_text}>
                <div  className={styles.projects_describ_title}>NUTRIFY</div >
                <div  className={styles.projects_describ_info}>Nutrition application</div >
              </div>
            </div>   
            <div className={styles.projects_filter}>
                <div className={styles.projects_filter_button}>TypeScript</div>
                <div className={styles.projects_filter_button}>Vite</div>
                <div className={styles.projects_filter_button}>Tailwind</div>
                <div className={styles.projects_filter_button}>React</div>
                <div className={styles.projects_filter_button}>Edamam API</div>    
            </div >
            <div className={styles.projects_content_descib}>
                    <div className={styles.projects_content_paragraph}> 
                      Welcome to Nutrify, a project dedicated to the world of food and nutrition. 
                      This application is designed to provide users with a delightful experience exploring and learning about various recipes and nutritional information. 
                      The project is built using cutting-edge technologies such as React, TypeScript, Vite, and Tailwind CSS, ensuring a modern and efficient development workflow.
                    </div>
            </div>
            <div className={styles.projects_button_wrapper}>
              <a className={styles.projects_button} href='https://inm1nd.github.io/calories_calculator/'>
                Learn more
              </a>
            </div>
            </div>
            </div>  
      </section>
      
    )
  }
  
  export default Nutrify