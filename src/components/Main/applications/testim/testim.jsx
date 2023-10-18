import React, { useRef, useState, useEffect } from 'react';
import styles from "./pallette.module.scss";



function InteractiveCanvas() {
  const canvasRef = useRef(null);
  const cursorSmallRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevPoint, setPrevPoint] = useState(null);
  const [currentColor, setCurrentColor] = useState('blue');
  const [cursorBorderColor, setCursorBorderColor] = useState('transparent');
  const [brushSize, setBrushSize] = useState(8);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const drawLine = (context, x1, y1, x2, y2) => {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursorSmall = cursorSmallRef.current;
  
    const handleMouseDown = () => {
      setIsDrawing(true);
    };
    
    const handleMouseUp = () => {
      setIsDrawing(false);
      setPrevPoint(null);
    };
    
    const handleMouseMove = (e) => {

      const context = canvas.getContext('2d');
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      if (cursorSmall) {
        cursorSmall.style.left = `${x}px`;
        cursorSmall.style.top = `${y}px`;
      }

      if (isDrawing) { 
        context.strokeStyle = currentColor;
        context.lineWidth = brushSize;
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.imageSmoothingEnabled = true;

        if (prevPoint) {
          drawLine(context, prevPoint.x, prevPoint.y, x, y);
        }

        setPrevPoint({ x, y });
        setCursorPosition({ x, y });

   
      }
    };

      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mousedown', handleMouseDown);
      canvas.addEventListener('mouseup', handleMouseUp);
  
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);   
    };
  }, [brushSize, currentColor, isDrawing, prevPoint]);


  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }



  return (
    
    <div style={{ position: 'relative' }}
      className={styles.pallette}>
    <div className={styles.canvas_wrapper}>
    {/* <div
      ref={cursorSmallRef}
      className={styles.canvasCursor}
      style={{
        width: `${brushSize * 2 }px`, // Умножьте размер кисти на 2, чтобы получить диаметр круга
        height: `${brushSize * 2 }px`, // Умножьте размер кисти на 2, чтобы получить диаметр круга
        backgroundColor: currentColor,
        border: `1px solid ${cursorBorderColor}`, // Цвет кисти будет цветом курсора
        transform: `translate(-30%, 100%) scale(${brushSize / 20})`,
        // left: `${cursorPosition.x - brushSize / 2}px`,
        // top: `${cursorPosition.y - brushSize / 2}px`,
      }}
      /> */}

    <canvas
        className={styles.canvas}
        ref={canvasRef}
        width={950}
        height={600}
      > 
      
      </canvas>
      </div>

      <div  className={styles.brush_style}>
      <div className={styles.brush_size}>

      <span className={styles.brush_size_counter}>{brushSize} pixels </span>
      <div className={styles.brush_size_control}>
      <span className={styles.brush_size_start}>1</span>
      <input 
      className={styles.brush_size_toggle}
      type="range" 
      min="1"
      max="40"
      step="3"
      value={brushSize}
      onChange={(e) => setBrushSize(parseInt(e.target.value))}/>
      <span className={styles.brush_size_finish}>40</span>
      
      </div>
      </div>
      <div className={styles.button_list}>
      <button className={styles.button} onClick={() => {setCurrentColor('#121212'), setCursorBorderColor('white')}}>rubber</button>
      <button className={styles.button} onClick={() => setCurrentColor('red')}>red</button>
      <button className={styles.button} onClick={() => setCurrentColor('blue')}>blue</button>
      <button className={styles.button} onClick={() => setCurrentColor('green')}>green</button>
      <button className={styles.button} onClick={() => setCurrentColor('yellow')}>yellow</button>
      <button className={styles.button} onClick={clearCanvas}>Clean</button>
      </div>
      </div>

      
    </div>
  );
}

export default InteractiveCanvas;















  // const handleCanvasMouseEnter = (e) => {
  //   const cursorSmall = cursorSmallRef.current;
  //   if (cursorSmall) {
  //     cursorSmall.style.display = 'block'; // Показать кастомный курсор при входе на канвас.
  //   }
  // };
  
  // const handleCanvasMouseLeave = (e) => {
  //   const cursorSmall = cursorSmallRef.current;
  //   if (cursorSmall) {
  //     cursorSmall.style.display = 'none'; // Скрыть кастомный курсор при выходе из канваса.
  //   }
  // };