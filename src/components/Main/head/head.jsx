import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

import LOGO from '../../../img/other/LOGO.png'
import styles from './head.module.scss'


const Head = () => {
  const myRef = useRef();
  let sketch = null;

  useEffect(() => {
    sketch = new p5(Sketch, myRef.current);
    return () => {
      sketch.remove();
    }
  }, []);

  const Sketch = (p) => {

    let t=0;

    p.setup = () => {
      p.createCanvas(2300, 950, p.WEBGL).parent(myRef.current);
      
    };

   

    p.draw = () => {
  
  p.normalMaterial();
  p.fill(1, 1, 250);
  p.background(250,0,0,0);
  p.rotateY(p.frameCount * 0.01);

  for (let j = 0; j < 10; j++) {
    p.push();
    for (let i = 0; i < 100; i++) {
      p.translate(
        p.sin(p.frameCount * 0.001 + j) * 200,
        p.sin(p.frameCount * 0.001 + j) * 200,
        i * 0.1
      );
      p.rotateZ(p.frameCount * 0.002);
      p.push();
      p.sphere(8, 6, 4);
      p.pop();
    }
    p.pop();
  }
}

  };

  return (
    <section className={styles.main}>
      {/* <div className={styles.main_section_logo}>
        <img className={styles.main_logo_img} src={LOGO} alt='SPOLUKA'/>	
      </div> */}

      <div className={styles.main_section_sphere}>
        {/* <img className={styles.main_sphere_img} src= {SPHERE} alt='SPHERE'/> */}
        <div className={styles.main_sphere_img} ref={myRef}> </div>
      </div>
      <div>
        <div className={styles.main_section_text}>
        we create and scale brands
        </div>
        <div className={styles.main_section_text2}>
        that disrupt the digital
        </div>
      </div>
    </section>
  );
};

export default Head;