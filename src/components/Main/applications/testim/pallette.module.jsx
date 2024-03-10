import styled from '@emotion/styled';

const Palette = styled.div`
  display: flex;
  
  width: 100%;
  align-items: center;

  @media (max-width: 1280px) {	
    flex-direction: column;
  }
`;

const CanvasCursor = styled.div`
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  pointer-events: none;
`;

const CanvasWrapper = styled.div`

`;

const Canvas = styled.canvas`
  border-radius: 20px;
  background: #121212;

`;

const BrushStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 20px;
  margin-left: 50px;
  width: 100%;
  height: 100%;

  @media (max-width: 1280px) {	
    margin-left: 0;
    padding: 0 ;
  }
`;

const BrushSize = styled.div`
  text-align: center;
`;

const BrushSizeCounter = styled.div`
  font-size: 28px;
`;

const BrushSizeControl = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const BrushSizeToggle = styled.input`
  width: 100%;
  height: 10px;
  -webkit-appearance: none;
  appearance: none;
  background: #d3d3d3;
  outline: none;
  margin: 5px 0;

  &::-webkit-slider-runnable-track {
    background: #fff;
    border-radius: 50px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    margin: 3px;
    border-radius: 50%;
    cursor: pointer;
    background: #9C0312;
  }
`;

const BrushSizeStart = styled.div`
  padding: 10px;
`;

const BrushSizeFinish = styled.div`
  padding: 10px;
`;

const ButtonList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (max-width: 1280px) {	
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {	
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 500px) {	
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Button = styled.button`
  padding: 20px;
  margin: 10px;
  text-transform: uppercase;
  font-size: 24px;
  border-radius: 50px;
  background: #D9D9D9;
  color: #383637;
  transition: all 0.3s ease-in-out;

  &:nth-child(1):hover {
    background-color: white;
    color: black;
  }

  &:nth-child(2):hover {
    background-color: red;
    color: black;
  }

  &:nth-child(3):hover {
    background-color: blue;
    color: black;
  }

  &:nth-child(4):hover {
    background-color: green;
    color: black;
  }

  &:nth-child(5):hover {
    background-color: yellow;
    color: black;
  }

  &:nth-child(6):hover {
    background-color: white;
    color: black;
  }
`;

export {Palette, CanvasCursor, CanvasWrapper, Canvas, BrushStyle, BrushSize, 
  BrushSizeCounter, BrushSizeControl, BrushSizeToggle, BrushSizeStart, BrushSizeFinish, ButtonList, Button }