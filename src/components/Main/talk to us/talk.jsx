import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// import { Canvas } from "@react-three/fiber"
// import { OrbitControls, ContactShadows} from "@react-three/drei"
// import RoundedTablet from "./Tablet.jsx"

import styles from "./talk.module.scss"; 

const About = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_akm93ow', 'template_0d6shyb', form.current, 'zbsLT_FXTpYzv9OGr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (

        <div className={styles.talk}>
            {/* <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[1,3,3]} />
                <ContactShadows frames={1} position={[0, -0.5, 0]} blur={1} opacity={0.75} />
                <ContactShadows frames={1} position={[0, -0.5, 0]} blur={3} color="orange" />
                <OrbitControls enableZoom={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
                <RoundedTablet/>
            </Canvas> */}
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
        </div>
    )
}

export default About 