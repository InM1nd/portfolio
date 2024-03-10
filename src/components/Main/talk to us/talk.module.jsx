import styled from '@emotion/styled';


const Main = styled.section`
    display: flex;
    flex-direction: column;
    width: 1600px;
    padding: 0 20px;
    margin-bottom: 150px;
`;

const Title = styled.h2`
  margin-top: 245px;
  margin-bottom: 100px;

  font-weight: 400;
  font-size: 48px;
  text-align: center;
  color: #fff;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 45px;

`;

const Card = styled.div`
    grid-column: span 4;
    background: #383637;
    border-radius: 20px;

   

    @media (max-width: 900px) {
        grid-column: span 8;
    }
`;

const Text = styled.div`
    font-size: clamp(1rem, 1rem + 3vw, 8rem);
    display: flex;
    justify-content: center;
    object-fit: fill;
    padding: 20px;
`;

const Form = styled.div`
    display: flex;

    flex-direction: column;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
   
`;

const FormTitle = styled.h3`
    font-weight: 400;
    font-size: 48px;
    color: #fff;
`

const Label = styled.label`
    font-size: 48px;
    padding: 10px;
`;

const Input = styled.input`
    padding: 20px;
    padding-left: 35px;
    border: none;
    border-radius: 50px;
    backdrop-filter: blur(10px);
    color: white;
    background: #797878;
    font-size: 32px;
    transition: all 0.3s ease-in-out;

    font-family: "Kanit", sans-serif;

    &:focus {
        
    }

    &:hover {
       
    }

    &::placeholder{
        color: #fff;
    }
`;

const Textarea = styled.textarea`
    padding: 20px;
    padding-left: 35px;
    border: none;
    color: white;
    font-size: 32px;
    border-radius: 50px;
    backdrop-filter: blur(10px);
    background: #797878;
    
    max-width: 100%;
    min-height: 400px;
    min-width: 100px;

    font-family: "Kanit", sans-serif;

    &::placeholder{
        color: #fff;
    }
`;

const Button = styled.button`
    font-weight: 400;
    font-size: 32px;
    color: #383637;
    

    background: #D9D9D9;
    border-radius: 50px;
    padding: 14px 47px;

    margin-left: auto;

    transition: all 0.3s ease-in-out;

    &:hover {
        color: #D9D9D9;
        background: #9C0312;
    }

    &:focus {
        
    }

    &:hover {
        
    }
`;

const SuccessMessage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: #000000f1;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: clamp(1rem, 1rem + 3vw, 8rem);
`;

export {
Main,
  Title,
  Text,
  Form,
  Wrapper,
  Label,
  Input,
  Textarea,
  Button,
  SuccessMessage,
  Container,
  FormTitle,
  Card,
};




