import React, { useEffect, useRef } from 'react';
import vanillaTilt from 'vanilla-tilt';

import styles from './team.module.scss'

import SANYA from '../../../img/other/IMG_8316.jpg'
// import SANYA from '../../../img/other/123.jpg'

const Team = () => {

    const cardRef = useRef();

    // useEffect(() => {
    //     vanillaTilt.init(cardRef.current, {
    //       max: 5,
    //       speed: 200,
    //     //   glare: true,
    //     //   'max-glare': 0.1,
    //     });
    //   }, []);

    return ( 
        <section className={styles.me}>
            
            <div className={styles.wrapper}>
   
                <div className={styles.side_wrapper}>
                    <div className={styles.img_container}>
                    <div className={styles.img_wrapper} >
                    <img className={styles.img} src={SANYA}/>
                    </div>
                    </div>

                    <div className={styles.underimg}>
                        <h2 className={styles.title}>oleksandr zabolotnyi</h2>
                        <div className={styles.track}>front_end developer</div>
                    </div>
                </div>
                
                
                
                <div className={styles.content_wrapper}>

                <div className={styles.text}>
                <h2>Hard Skills</h2> 
                    As an aspiring front-end developer, I have experience with HTML, CSS, JavaScript, and 
                    React. My primary goal is to create visually appealing, functional, and user-friendly 
                    websites and applications. 
                    I believe that a combination of creative solutions and technology is key to success. 
                    That is why I try always to stay up-to-date and continue to explore best practices to 
                    improve my skills.
                    I strongly emphasize teamwork, clear and transparent communication is crucial for 
                    successful project implementation.
                </div>
                
                <div className={styles.text}>
                    <h2>Skills</h2>
                        HTML & CSS
                        JavaScript
                        React
                        Three.js
                        Teamwork
                        Communication
                </div>
                

                </div>
            </div>    
            
        </section>
        )
    }
    
    export default Team