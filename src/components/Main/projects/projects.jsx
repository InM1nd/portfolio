import styles from './projects.module.scss'
import Teple from '../../../img/other/123.jpg'
import ARROW from '../../../img/other/9TR5GzG5c.gif'


import Skeptic from './skepic'
import Oilfaces from './oilfaces'


const Projects = () => {
    return (
      <div className={styles.wrapepr}>
        <div className={styles.projects}>
          <Skeptic/>
        </div>
        <div className={styles.projects}>
          <Oilfaces/>
        </div>
      </div>
    )
  }
  
  export default Projects