import React , { useRef, useState, useEffect } from "react"
import {Main, Subtitle, Title, Text } from "./head.module.jsx"

const Head = () => {

  const startText = 'HI. I’m Alex.';
  const letters = "abcdfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";  

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
    <Main> 
        <Title data-value={startText}  className="link">
            {startText}  
        </Title>
        <Subtitle>Front-End Developer.</Subtitle>
        <Text> I'm passionate about crafting experiences that are engaging, accessible, and user-centric. </Text>
        <Text> portfolio still in progress </Text>   
    </Main>
  );
};

export default Head;



