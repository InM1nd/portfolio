import React , { useRef, useState, useEffect } from "react"
import styles from "./head.module.scss"

const Head = () => {

  // const texts = ["Why", "is", "this", "so", "satisfying", "to", "watch?"];
  // const morphTime = 1;
  // const cooldownTime = 1;
  // const [textIndex, setTextIndex] = useState(0);
  // const [morph, setMorph] = useState(0);
  // const [cooldown, setCooldown] = useState(cooldownTime);

  // let time = new Date();

  // const text1Ref = useRef(null);
  // const text2Ref = useRef(null);

  // const doMorph = () => {
  //   setMorph((prevMorph) => {
  //     setCooldown(0);
  //     let fraction = prevMorph / morphTime;

  //     if (fraction > 1) {
  //       setCooldown(cooldownTime);
  //       fraction = 1;
  //     }

  //     setMorphValue(fraction);
  //     return prevMorph - cooldown;
  //   });
  // };

  // const setMorphValue = (fraction) => {
  //   const text1 = document.getElementById("text1");
  //   const text2 = document.getElementById("text2");

  //   text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  //   text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  //   fraction = 1 - fraction;
  //   text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  //   text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  //   text1.textContent = texts[textIndex % texts.length];
  //   text2.textContent = texts[(textIndex + 1) % texts.length];
  // };

  // const doCooldown = () => {
  //   setMorph(0);

  //   const text2 = document.getElementById("text2");
  //   text2.style.filter = "";
  //   text2.style.opacity = "100%";

  //   const text1 = document.getElementById("text1");
  //   text1.style.filter = "";
  //   text1.style.opacity = "0%";
  // };

  // useEffect(() => {
  //   const animate = () => {
  //     requestAnimationFrame(animate);

  //     const newTime = new Date();
  //     const shouldIncrementIndex = cooldown > 0;
  //     const dt = (newTime - time) / 1000;

  //     time = newTime;
  //     setCooldown((prevCooldown) => prevCooldown - dt);

  //     if (cooldown <= 0) {
  //       if (shouldIncrementIndex) {
  //         setTextIndex((prevIndex) => prevIndex + 1);
  //       }

  //       doMorph();
  //     } else {
  //       doCooldown();
  //     }
  //   };


    

  //   const elts = {
  //     text1: document.getElementById("text1"),
  //     text2: document.getElementById("text2"),
  //   };

  //   setTextIndex(texts.length - 1);

  //   elts.text1.textContent = texts[textIndex % texts.length];
  //   elts.text2.textContent = texts[(textIndex + 1) % texts.length];

  //   animate();

  //   return () => cancelAnimationFrame(animate);
  // }, [textIndex]);
 
  return (
    <section className={styles.main}>
    <div className={styles.main_text_container}>
      {/* <div className={styles.main_text}> Oleksandr Zabolotnyi </div> */}
      
      {/* <div className={styles.container_11} id="container">
      <span className={styles.text1} id="text1"></span>
      <span className={styles.text2} id="text2"></span>
      </div> */}

      {/* <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix in="SourceGraphic"
                type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 255 -140" />
          </filter>
        </defs>
      </svg> */}
    </div>
    </section>
  );
};

export default Head;



