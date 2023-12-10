import React , { useRef, useState, useEffect } from "react"
import styles from "./head.module.scss"

const Head = () => {

  const startText = 'oleksandr zabolotnyi';
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  

  const animateText = (target, originalText) => {
      let iteration = 0;
      let interval = setInterval(() => {
          target.innerText = originalText
              .split("")
              .map((letter, index) => {
                  if (index < iteration) {
                      return originalText[index];
                  }
                  return letters[Math.floor(Math.random() * 26)];
              })
              .join("");

          if (iteration >= originalText.length) {
              clearInterval(interval); 
          }

          iteration += 1 / 5;
      }, 10);
  };

  useEffect(() => {
      const links = document.querySelectorAll(".link");
      links.forEach(link => {
          link.addEventListener("mouseover", (event) => {
              animateText(event.target, event.target.dataset.value);
          });    
      });

      return () => {
          links.forEach(link => {
              link.removeEventListener("mouseover", animateText); 
          });
      };
  }, []);

  useEffect(() => {
      
      const startLink = document.querySelector(".link");
      if (startLink) {
          animateText(startLink, startLink.dataset.value);
      }

      const minuteInterval = setInterval(() => {
          if (startLink) {
              animateText(startLink, startLink.dataset.value);
          }
      }, 60000); // 60000 миллисекунд = 1 минута

      return () => {
          clearInterval(minuteInterval);
      };
  }, []);

  return (
    <section className={styles.main}>
    <div className={styles.main_text_container}>
      <div 
        className={styles.main_text}> 
        <h2  
          data-value={startText} 
          className="link">
          {startText}  
        </h2>
        
        <p className={styles.main_desc}> portfolio still in progress  </p>
      </div>
    </div>
    </section>
  );
};

export default Head;



