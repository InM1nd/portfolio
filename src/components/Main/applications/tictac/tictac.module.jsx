import styled from '@emotion/styled';


const Main = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 900px) {	
    
    flex-direction: column;
  }
  
`;

const Desk = styled.div`
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border-radius: 50px;
  background: #171516 ;
  height: 200px;
  width: 200px;
  margin: 10px;
  text-align: center;
  font-size: clamp(0.5rem, 0.5rem + 5vw, 10rem);
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    cursor: pointer;
    background-color: #9C0312;
    transform: scale(1.05);
  }
  
  &:disabled {
    color: black;
    cursor: no-drop;
  }

  @media (max-width: 1400px) {	
    height: 150px;
    width: 150px;
    margin: 5px;
  }

  @media (max-width: 500px) {	
    height: 100px;
    width: 100px;
    margin: 5px;
    border-radius: 30px;
  }
  
`;

const Result = styled.div`
  padding-top: 20px;
  text-align: center;
  font-weight: 400;
  font-size: 48px;
  color: #fff;
`;

const Reset = styled.button`

  border-radius: 50px;
  background: #D9D9D9 ;
  color: #383637;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 24px;
  transition: all 0.3s ease-in-out;
  margin-bottom: 20px;
  width: 100%;
  
  &:focus {
    outline: none;
    color: #D9D9D9;
    background-color: #9C0312;
  }
  
  &:hover {
    outline: none;
    color: #D9D9D9;
    background-color: #9C0312;
  }

  @media (max-width: 900px) {	
    margin-top: 20px;
    margin-bottom: 0;
  }
`;

const Steps = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 40px;
  width: 100%;

  @media (max-width: 1400px) {	
    margin-left: 10px;
  }

  @media (max-width: 900px) {	
    margin-left: 0;
  }
`;

const List = styled.ul`
  width: 100%;
  margin: 0px;
  font-size: clamp(0.1rem, 0.1rem + 3vw, 5rem);
`;

const ListItem = styled.li`
  padding-left: 15px;
  width: 100%;

  @media (max-width: 900px) {	
    padding-left: 0;
  }
`;

export {Main, Desk, Row, Button, Result, Reset, Steps, List, ListItem }




// @media (max-width: 900px) {	
   
// }