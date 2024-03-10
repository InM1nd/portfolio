import React, { useRef, useState, useEffect } from 'react';
import {Palette, CanvasCursor, CanvasWrapper, Canvas, BrushStyle, BrushSize, 
  BrushSizeCounter, BrushSizeControl, BrushSizeToggle, BrushSizeStart, 
  BrushSizeFinish, ButtonList, Button } from "./pallette.module.jsx";



function InteractiveCanvas() {
  const canvasRef = useRef(null);
  const cursorSmallRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevPoint, setPrevPoint] = useState(null);
  const [currentColor, setCurrentColor] = useState('blue');
  const [cursorBorderColor, setCursorBorderColor] = useState('transparent');
  const [brushSize, setBrushSize] = useState(8);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const [canvasWidth, setCanvasWidth] = useState(1200);
  const [canvasHeight, setCanvasHeight] = useState(900);




  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth <= 500) {
        setCanvasWidth(320);
        setCanvasHeight(600);
      } else if (viewportWidth <= 960) {
        setCanvasWidth(420);
        setCanvasHeight(600);
      } else if (viewportWidth <= 1500) {
        setCanvasWidth(900);
        setCanvasHeight(600);
      } else {
        setCanvasWidth(1200);
        setCanvasHeight(900);
      }
    };

    // Вызываем функцию handleResize() при загрузке страницы и при изменении размеров окна
    window.addEventListener('resize', handleResize);
    handleResize();

    // Очищаем слушатель событий при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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
    
    <Palette >
    <CanvasWrapper>
    <Canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
      > 
  
      </Canvas>
      </CanvasWrapper>

      <BrushStyle>
      <BrushSize>

      <BrushSizeCounter>{brushSize} pixels </BrushSizeCounter>
      <BrushSizeControl>
      <BrushSizeStart>1</BrushSizeStart>
      <BrushSizeToggle
      type="range" 
      min="1"
      max="40"
      step="3"
      value={brushSize}
      onChange={(e) => setBrushSize(parseInt(e.target.value))}/>
      <BrushSizeFinish>40</BrushSizeFinish>
      
      </BrushSizeControl>
      </BrushSize>
      
      <ButtonList>
      <Button onClick={() => {setCurrentColor('#121212'), setCursorBorderColor('white')}}>rubber</Button>
      <Button onClick={() => setCurrentColor('red')}>red</Button>
      <Button onClick={() => setCurrentColor('blue')}>blue</Button>
      <Button onClick={() => setCurrentColor('green')}>green</Button>
      <Button onClick={() => setCurrentColor('yellow')}>yellow</Button>
      <Button onClick={clearCanvas}>Clean</Button>
      </ButtonList>
      </BrushStyle>

      
    </Palette>
  );
}

export default InteractiveCanvas;





