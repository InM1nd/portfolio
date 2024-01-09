import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

// import { Canvas } from "@react-three/fiber"
// import { OrbitControls, ContactShadows} from "@react-three/drei"
// import RoundedTablet from "./Tablet.jsx"

import styles from "./talk.module.scss"; 

const About = () => {

    const form = useRef();
    const [isSuccess, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_akm93ow', 'template_0d6shyb', form.current, 'zbsLT_FXTpYzv9OGr')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            form.current.reset();
          }, 2000);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className={styles.talk}>
            
            <div  className={styles.text}>
                Write your Hi message to me!
            </div>
            <form className={styles.form} ref={form} onSubmit={sendEmail}>
                <div className={styles.wrapper}>
                <label className={styles.label}>Name</label>
                <input className={styles.input} type="text" name="user_name" />
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" name="user_email" />
                <label className={styles.label}>Message</label>
                <textarea className={styles.textarea} name="message" />
                <input className={styles.button} type="submit" value="Send" />
                </div>
            </form>   
            {isSuccess && (
                <div className={styles.successMessage}>
                <p>Message sent successfully!</p> 
                <p>Form will be cleared shortly.</p>
            </div>
            )}
        </div>
    )
}

export default About 