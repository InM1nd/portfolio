import React, { useEffect, useRef } from 'react';
import vanillaTilt from 'vanilla-tilt';

import styles from './team.module.scss'

import SANYA from '../../../img/other/123.jpg'


const Team = () => {

    const cardRef = useRef();

    useEffect(() => {
        vanillaTilt.init(cardRef.current, {
          max: 5,
          speed: 200,
          glare: true,
          'max-glare': 0.1,
        });
      }, []);

    return ( 
        <section className={styles.team}>
                    <div className={styles.team_card} >
                        
                        <div className={styles.team_card_right}> 
                            <div className={styles.wrapper} ref={cardRef} >
                            
                            <div className={styles.team_card_img_wrapper} >
                            <img className={styles.team_card_img} src={SANYA}/> 
                            </div>
                           
                            <div className={styles.team_card_content}> 
                            <h2 className={styles.team_card_name}>oleksandr zabolotnyi</h2>
                            <div  className={styles.team_card_info}> FRONT_END DEVELOPER</div>

                            <div className={styles.team_card_skills}>
                            <div className={styles.team_card_text_wrapper}>
                                <p className={`${styles.team_card_subtitle} ${styles._hard}`}>HARD SKILLS</p>

                                <div className={styles.team_card_hardskills}>
                                    <p className={styles.team_card_bartext}>HTML&SCSS</p>
                                    <div className={styles.team_bar_wrapper}>
                                    <div className={`${styles.team_bar} ${styles._hard_1}`}></div>
                                    </div>
                                </div>

                                <div className={styles.team_card_hardskills}>
                                    <p className={styles.team_card_bartext}>REACT</p>
                                    <div className={styles.team_bar_wrapper}>
                                    <div className={`${styles.team_bar} ${styles._hard_2}`}></div>
                                    </div>
                                </div>

                                <div className={styles.team_card_hardskills}>
                                    <p className={styles.team_card_bartext}>THREE.JS</p>
                                    <div className={styles.team_bar_wrapper}>
                                    <div className={`${styles.team_bar} ${styles._hard_3}`}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.team_card_text_wrapper} >
                                
                            <p className={`${styles.team_card_subtitle} ${styles._soft}`}>SOFT SKILLS</p>

                                <div className={styles.team_card_hardskills}>
                                    <p className={`${styles.team_card_bartext} ${styles._soft}`}>TEAM WORK</p>
                                    <div className={styles.team_bar_wrapper}>
                                    <div className={`${styles.team_bar} ${styles._soft_1}`}></div>
                                    </div>
                                </div>

                                <div className={styles.team_card_hardskills}>
                                    <p className={`${styles.team_card_bartext} ${styles._soft}`}>COMMUNICATION</p>
                                    <div className={styles.team_bar_wrapper}>
                                    <div className={`${styles.team_bar} ${styles._soft_2}`}></div>
                                    </div>
                                </div>

                                <div className={styles.team_card_hardskills}>
                                    <p className={`${styles.team_card_bartext} ${styles._soft}`}>COMMUNICATION</p>
                                    <div className={styles.team_bar_wrapper}>
                                    <div className={`${styles.team_bar} ${styles._soft_3}`}></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div> 
                            </div>
                        </div>

                    </div>
        </section>
        )
    }
    
    export default Team