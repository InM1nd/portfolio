import styles from "./applications.module.scss"; 

import TicTac from './tictac/tictac'
import Weather from "./weather/weather";
// import ElectricSpider from "./spider/spider";
import InteractiveCanvas from "./testim/testim"

const Applications = () => {

    
    return (
            <div className={styles.wrapepr}>
            {/* <div className={styles.title}>Apps</div> */}
                <div className={styles.app}>

                    <div className={styles.card}>
					    <div className={styles.card_wrapper}>
                        <div className={styles.content}><TicTac/></div>
                        <div className={styles.description}>
                        <h2 className={styles.sub_title}>TicTacToe</h2>  
                        <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia blandit sodales. 
                        In congue eros arcu, ut cursus felis placerat ut. Proin pretium vulputate dapibus. Donec posuere tristique eros. In ultricies purus sit amet est rutrum tempus. 
                        </p>
                    </div> 
                    </div>
						  </div>
                </div>

                <div className={styles.app}>
                <div className={styles.card}>
					 <div className={styles.card_wrapper}>
                    <div className={styles.content}><Weather/></div>
                    <div className={styles.description}>
                    <h2 className={styles.sub_title}>Weather Forecast</h2> 
                        <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia blandit sodales. 
                        In congue eros arcu, ut cursus felis placerat ut. Proin pretium vulputate dapibus. Donec posuere tristique eros. In ultricies purus sit amet est rutrum tempus. 
                        </p> 
                    </div> 
                    </div> 
						  </div>
                </div>

                <div className={styles.app}>
                
                <div className={styles.card}>
					 <div className={styles.card_wrapper}>
                    <div className={styles.content}><InteractiveCanvas/></div>
                    <div className={styles.description}> 
                    <h2 className={styles.sub_title}>Drawing Place</h2> 
                        <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia blandit sodales. 
                        In congue eros arcu, ut cursus felis placerat ut. Proin pretium vulputate dapibus. Donec posuere tristique eros. In ultricies purus sit amet est rutrum tempus. 
                        </p>
                    </div> 
						  </div>
                    </div> 
                </div>
                {/* <div className={styles.app} ><ElectricSpider className={styles.app}/></div> */} 
            </div> 
        
    )
}

export default Applications 




