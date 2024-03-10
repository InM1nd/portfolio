import styled from '@emotion/styled';

const Main = styled.section`
  width: 100%;
`

const SearchBox = styled.div`
  
`

const Form = styled.form`
    display: flex;
    margin-bottom: 10px;
    width: 100%;
`

const Input = styled.input`
    width: 100%;
    border-radius: 50px;
    backdrop-filter: blur(10px);
    background: rgba(217, 217, 217, 0.4);
    font-size: 18px;

    padding: 20px;
    margin-right: 10px;
    &::placeholder{
        font-size: 18px;
        color:#171516 ;
    }
`

const SeachImg = styled.img`
    
`

const Button = styled.button`
  border-radius: 50px;
  background: #d9d9d9;
  padding: 20px;
`


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    
    margin: auto; 
    font-weight: 400;
    font-size: 24px;
    color: #fff;
`

const Card = styled.div`
    background-color: #171516;
    border-radius: 50px;
    padding: 40px;
`;

const VerticalCard = styled(Card)`
    
`;

const LongCard = styled(Card)`
    display: flex;
    justify-content: space-between;
    grid-column: span 2;
`;



export {Main, SearchBox, Form, Input, SeachImg, Button, Container, Card, VerticalCard, LongCard }