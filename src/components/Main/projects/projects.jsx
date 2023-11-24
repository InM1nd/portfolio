import styles from './projects.module.scss'
import Teple from '../../../img/other/123.jpg'
import ARROW from '../../../img/other/9TR5GzG5c.gif'


import Skeptic from './skepic'
import Oilfaces from './oilfaces'
import Dashboard from './dashboard'
import Skelya from './skelya'


const Projects = () => {
    return (
      <div className={styles.wrapepr}>
        <div className={styles.projects}>
          <Skeptic/>
        </div>
        <div className={styles.projects}>
          <Oilfaces/>
        </div>
        <div className={styles.projects}>
          <Dashboard/>
        </div>
        <div className={styles.projects}>
          <Skelya/>
        </div>
      </div>
    )
  }
  
  export default Projects