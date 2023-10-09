import styles from "./applications.module.scss"; 

import TicTac from './tictac/tictac'
import Weather from "./weather/weather";
// import ElectricSpider from "./spider/spider";
import InteractiveCanvas from "./testim/testim"

const Applications = () => {

    
    return (
            <div className={styles.wrapepr}>
            <div className={styles.title}>Apps</div>
                <div className={styles.app}>
                <p className={styles.sub_title}>TicTacToe</p> 
                    <div className={styles.card}>
                        <div className={styles.content}><TicTac/></div>
                        <div className={styles.description}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia blandit sodales. 
                        In congue eros arcu, ut cursus felis placerat ut. Proin pretium vulputate dapibus. Donec posuere tristique eros. In ultricies purus sit amet est rutrum tempus. 
                        Aliquam nec sem et dolor accumsan volutpat porta quis lorem. Curabitur eu semper urna, eget vestibulum nibh. Vestibulum interdum diam non nisl finibus, vehicula rhoncus lorem tristique. 
                        Phasellus ac urna eu quam tincidunt bibendum vel vel augue. Donec eget iaculis nisi. Suspendisse tempus risus at erat porttitor sodales. Pellentesque venenatis auctor tortor non pretium. 
                        Quisque ex arcu, tincidunt in mi sed, imperdiet rutrum neque.
                        Sed efficitur erat quis pulvinar porttitor. 
                        Nullam hendrerit efficitur tortor, non consectetur tellus iaculis vitae. Aenean sagittis sem lorem, lobortis tempor leo maximus eu. 
                        Phasellus blandit egestas sem, et vestibulum velit laoreet sed. Sed ullamcorper pulvinar velit, sit amet suscipit est cursus non. 
                        Pellentesque elementum ultrices ligula, lacinia blandit nisi pulvinar sodales. Proin rutrum semper libero, non dapibus metus tincidunt quis. 
                        Proin nec neque aliquam, pulvinar mi sed, fringilla sem. Proin nisi nunc, consectetur at erat quis, convallis euismod velit.
                        Mauris ut tincidunt massa. Duis ut facilisis turpis. 
                    </div> 
                    </div>
                </div>

                <div className={styles.app}>
                <p className={styles.sub_title}>Weather Forecast</p> 
                <div className={styles.card}>
                    <div className={styles.content}><Weather/></div>
                    <div className={styles.description}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia blandit sodales. 
                        In congue eros arcu, ut cursus felis placerat ut. Proin pretium vulputate dapibus. Donec posuere tristique eros. In ultricies purus sit amet est rutrum tempus. 
                        Aliquam nec sem et dolor accumsan volutpat porta quis lorem. Curabitur eu semper urna, eget vestibulum nibh. Vestibulum interdum diam non nisl finibus, vehicula rhoncus lorem tristique. 
                        Phasellus ac urna eu quam tincidunt bibendum vel vel augue. Donec eget iaculis nisi. Suspendisse tempus risus at erat porttitor sodales. Pellentesque venenatis auctor tortor non pretium. 
                        Quisque ex arcu, tincidunt in mi sed, imperdiet rutrum neque.
                        Sed efficitur erat quis pulvinar porttitor. 
                        Nullam hendrerit efficitur tortor, non consectetur tellus iaculis vitae. Aenean sagittis sem lorem, lobortis tempor leo maximus eu. 
                        Phasellus blandit egestas sem, et vestibulum velit laoreet sed. Sed ullamcorper pulvinar velit, sit amet suscipit est cursus non. 
                        Pellentesque elementum ultrices ligula, lacinia blandit nisi pulvinar sodales. Proin rutrum semper libero, non dapibus metus tincidunt quis. 
                        Proin nec neque aliquam, pulvinar mi sed, fringilla sem. Proin nisi nunc, consectetur at erat quis, convallis euismod velit.
                        Mauris ut tincidunt massa. Duis ut facilisis turpis. 
                        </div> 
                    </div> 
                </div>

                <div className={styles.app}>
                <p className={styles.sub_title}>Drawing Place</p> 
                <div className={styles.card}>
                    <div className={styles.content}><InteractiveCanvas/></div>
                    <div className={styles.description}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia blandit sodales. 
                        In congue eros arcu, ut cursus felis placerat ut. Proin pretium vulputate dapibus. Donec posuere tristique eros. In ultricies purus sit amet est rutrum tempus. 
                        Aliquam nec sem et dolor accumsan volutpat porta quis lorem. Curabitur eu semper urna, eget vestibulum nibh. Vestibulum interdum diam non nisl finibus, vehicula rhoncus lorem tristique. 
                        Phasellus ac urna eu quam tincidunt bibendum vel vel augue. Donec eget iaculis nisi. Suspendisse tempus risus at erat porttitor sodales. Pellentesque venenatis auctor tortor non pretium. 
                        Quisque ex arcu, tincidunt in mi sed, imperdiet rutrum neque.
                        Sed efficitur erat quis pulvinar porttitor. 
                        Nullam hendrerit efficitur tortor, non consectetur tellus iaculis vitae. Aenean sagittis sem lorem, lobortis tempor leo maximus eu. 
                        Phasellus blandit egestas sem, et vestibulum velit laoreet sed. Sed ullamcorper pulvinar velit, sit amet suscipit est cursus non. 
                        Pellentesque elementum ultrices ligula, lacinia blandit nisi pulvinar sodales. Proin rutrum semper libero, non dapibus metus tincidunt quis. 
                        Proin nec neque aliquam, pulvinar mi sed, fringilla sem. Proin nisi nunc, consectetur at erat quis, convallis euismod velit.
                        Mauris ut tincidunt massa. Duis ut facilisis turpis. 
                    </div> 
                    </div> 
                </div>
                {/* <div className={styles.app} ><ElectricSpider className={styles.app}/></div> */} 
            </div> 
        
    )
}

export default Applications 




