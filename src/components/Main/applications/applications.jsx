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
                        Mini Tic-Tac-Toe app—it's a fun little game for two. 
                        Take turns placing Xs or Os on the 3x3 board, and whoever lines up three in a row first wins. 
                        I whipped it up as a coding and game development practice, making it more than just a game — it's a showcase of my skills in the portfolio.
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
                        Check out my Weather Checker app—it's like a skill-boosting project. 
                        Easily peep at the current weather using OpenWeatherMap. 
                        Get live updates on temperature, humidity, and forecasts for wherever you fancy. 
                        I've seamlessly weaved in API magic to amp up the portfolio's functionality.
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
                        Drawing App — keeping it plain and effective. 
                        You've got the basics: change brush color, tweak size, and wipe the canvas clean. 
                        Nothing fancy, just a handy tool for letting your creative juices flow.   
                        <br/> P.S.  App has some issues with positioning of the brush. Gonna be fixed soon.
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




