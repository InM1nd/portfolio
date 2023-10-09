// import React, { useState, useEffect, useRef } from 'react';

// function Spider() {
//   const [canvas, setCanvas] = useState(null);
//   const [context, setContext] = useState(null);
//   const [w, setW] = useState(window.innerWidth);
//   const [h, setH] = useState(window.innerHeight);
//   const [mouse, setMouse] = useState({ x: false, y: false });
//   const [lastMouse, setLastMouse] = useState({});
//   const [tent, setTent] = useState([]);
//   const [target, setTarget] = useState({ x: 0, y: 0 });
//   const [lastTarget, setLastTarget] = useState({});
//   const [t, setT] = useState(0);

//   useEffect(() => {
//     initCanvas();
//     initTentacles();
//     loop();
//     addEventListeners();

//     return () => {
//       removeEventListeners();
//     };
//   }, []);

//   const initCanvas = () => {
//     const canvasElement = document.getElementById('canvas');
//     const canvasContext = canvasElement.getContext('2d');
//     canvasElement.width = w;
//     canvasElement.height = h;

//     setCanvas(canvasElement);
//     setContext(canvasContext);
//   };

//   const initTentacles = () => {
//     const maxl = 300;
//     const minl = 50;
//     const n = 30;
//     const numt = 500;
//     const tentacles = [];

//     for (let i = 0; i < numt; i++) {
//       tentacles.push(
//         new Tentacle(
//           Math.random() * w,
//           Math.random() * h,
//           Math.random() * (maxl - minl) + minl,
//           n,
//           Math.random() * 2 * Math.PI
//         )
//       );
//     }

//     setTent(tentacles);
//   };

//   const addEventListeners = () => {
//     const handleMouseMove = (e) => {
//       const lastMouseState = { ...mouse };
//       setLastMouse(lastMouseState);

//       const x = e.pageX - canvas.offsetLeft;
//       const y = e.pageY - canvas.offsetTop;
//       setMouse({ x, y });
//     };

//     const handleMouseLeave = () => {
//       setMouse({ x: false, y: false });
//     };

//     const handleMouseDown = () => {
//       setClicked(true);
//     };

//     const handleMouseUp = () => {
//       setClicked(false);
//     };

//     const handleWindowResize = () => {
//       const newCanvas = canvas;
//       newCanvas.width = window.innerWidth;
//       newCanvas.height = window.innerHeight;
//       setW(newCanvas.width);
//       setH(newCanvas.height);
//       loop();
//     };

//     canvas.addEventListener('mousemove', handleMouseMove, false);
//     canvas.addEventListener('mouseleave', handleMouseLeave, false);
//     canvas.addEventListener('mousedown', handleMouseDown, false);
//     canvas.addEventListener('mouseup', handleMouseUp, false);

//     window.addEventListener('resize', handleWindowResize);

//     return () => {
//       canvas.removeEventListener('mousemove', handleMouseMove, false);
//       canvas.removeEventListener('mouseleave', handleMouseLeave, false);
//       canvas.removeEventListener('mousedown', handleMouseDown, false);
//       canvas.removeEventListener('mouseup', handleMouseUp, false);
//       window.removeEventListener('resize', handleWindowResize);
//     };
//   };

//   const draw = () => {
//     // Animation logic here
//     // ...
//   };

//   const loop = () => {
//     window.requestAnimationFrame(loop);
//     context.clearRect(0, 0, w, h);
//     draw();
//   };

//   return (
//     <canvas
//       id="canvas"
//       width={w}
//       height={h}
//       style={{ background: 'black' }}
//     ></canvas>
//   );
// }

// export default Spider;



import React, { useState, useEffect } from 'react';
import './ElectricSpider.scss';

const ElectricSpider = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [points, setPoints] = useState([]);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const numPoints = 50; // Количество точек
    const newPoints = [];

    for (let i = 0; i < numPoints; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      newPoints.push({ x, y });
    }

    setPoints(newPoints);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="electric-spider">
      {points.map((point, index) => (
        <div
          key={index}
          className="point"
          style={{
            left: point.x + 'px',
            top: point.y + 'px',
          }}
        ></div>
      ))}
      <div
        className="electric-effect"
        style={{
          left: cursorPosition.x + 'px',
          top: cursorPosition.y + 'px',
        }}
      ></div>
    </div>
  );
};

export default ElectricSpider;