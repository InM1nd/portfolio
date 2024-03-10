import styled from '@emotion/styled';


const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 150px;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 45px;
  padding: 0 20px;
  max-width: 1600px;

  @media (max-width: 1440px) {
    grid-gap: 20px;
  }



  @media (max-width: 900px) {
    grid-gap: 45px;
  }

`;

const Card = styled.div`
  background-color: #383637;
  padding: 20px;
  display: flex;
 
  border-radius: 30px;

 

`;

const SmallCard = styled(Card)`
  grid-column: span 3;

  @media (max-width: 900px) {
    grid-column: span 8;
  }
`;

const LargeCard = styled(Card)`
  grid-column: span 5;

  @media (max-width: 900px) {
    grid-column: span 8;
  }
`;

const SectionTitle = styled.h2`
  font-weight: 400;
  font-size: 48px;
  text-align: center;
  color: #fff;

  margin: 100px 0;
`


const Wrapper = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: column;
  
  
`

const Title = styled.h2`
  font-weight: 400;
  font-size: 48px;
  color: #fff;

  margin-left: 20px; 

`

const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 24px;
  color: #fff;

  margin-left: 20px; 
  padding-bottom: 20px;
`

const Text = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: #fff;
  
`

const Content = styled.div`
  position: relative;

  transition: filter 0.3s; // добавили анимацию
  /* filter: blur(5px); // добавили начальный блюр */

  &:hover {
    filter: none; // убираем блюр при наведении
  }
`

const Button = styled.a`
  position: absolute;
  font-weight: 400;
  font-size: 32px;
  color: #D9D9D9;
  

  background: #9C0312;
  border-radius: 50px;
  padding: 14px 47px;

  margin: 20px;
  
  bottom: 0;
  right: 0;

  transition: all 0.3s ease-in-out;

  &:hover {
    color: #D9D9D9;
    background: #9C0312; // убираем блюр при наведении
  }
`



const Image = styled.img`
  height: 570px;
  border-radius: 20px;
  
  transition: filter 0.3s ease;
  filter: grayscale(100%);

   &:hover {
    filter: grayscale(0%);
  }

  @media (max-width: 1440px) {
    height: 500px;
  }

  @media (max-width: 1280px) {
    height: 450px;
  }

  @media (max-width: 1100px) {
    height: 350px;
  }

  @media (max-width: 900px) {
    max-width: 100%;
    height: auto;
  
  }



`

export {Main, Container, SectionTitle, LargeCard, SmallCard, Wrapper, Title, Subtitle, Text, Content, Button, Image }

  
