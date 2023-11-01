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
                <h2>Hard Skills</h2> SkillsHard
                    Hard SkillsHard SkillsHard SkillsHard 
                    SkillsHard SkillsHard Skills
                    Hard SkillsHard SkillsHard Skills
                    Hard SkillsHard SkillsHard Skills
                    Hard SkillsHard SkillsHard Skills
                    Hard SkillsHard SkillsHard Skills
                    Hard Skills
                </div>
                
                <div className={styles.text}>
                <h2>Soft Skills</h2>
                    Soft SkillsSoft SkillsSoft Skills
                    Soft SkillsSoft SkillsSoft Skills
                    Soft SkillsSoft SkillsSoft Skills
                    Soft SkillsSoft SkillsSoft Skills
                    Soft SkillsSoft SkillsSoft SkillsSoft Skills
                    Soft SkillsSoft SkillsSoft SkillsSoft Skills
                </div>
                

                </div>
            </div>    
            
        </section>
        )
    }
    
    export default Team