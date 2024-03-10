import styled from '@emotion/styled';

const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1600px;

  padding: 0 20px;

  margin-bottom: 150px;

`

const Title = styled.h2`
  margin-top: 245px;
  margin-bottom: 100px;

  font-weight: 400;
  font-size: 48px;
  text-align: center;
  color: #fff;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 100px;

  @media (max-width: 1100px) {	
		flex-direction: column;
  }
`;

const ImageConatiner = styled.div`
  padding: 20px;
  border-radius: 50px;
  background-color: #383637;
  display: flex;
  height: auto;
  margin-right: 50px; /* Добавляем отступ между изображением и текстом */
  width: 50%;

  @media (max-width: 1100px) {	
    width: 80%;
		margin-right: 0px;
  }

  @media (max-width: 900px) {	
    width: 100%;
		margin-right: 0px;
  }
`;

const Image = styled.img`
  border-radius: 50px;
  max-height: 100%;  
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  
  width: 50%;

  @media (max-width: 1100px) {	
    margin-top: 40px;
		width: 100%;
  }
`;

const Subtitle = styled.h1`
  font-weight: 400;
  font-size: 48px;
  color: #fff;
  margin-bottom: 40px;



  @media (max-width: 1400px) {	
    font-size: 40px;
  }

  

`;

const Text = styled.p`
  font-weight: 400;
  font-size: 32px;
  color: #fff;

  &:not(:last-child){
    padding-bottom: 20px;
  }

  @media (max-width: 1400px) {	
    font-size: 24px;
  }
  
  
`;



const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 45px;

`;



const Card = styled.div`
  padding: 20px;
  border-radius: 50px;
  background-color: #383637;
`;

const LargeCard = styled(Card)`
  grid-column: span 6;
`;

const SmallCard = styled(Card)`
  grid-column: span 3;

  @media (max-width: 900px) {	
    grid-column: span 6;
  }
`;

const CardTitle = styled.h3`
  font-weight: 400;
  font-size: 48px;
  text-align: start;
  color: #fff;
  margin-bottom: 10px;
  margin-left: 20px;

  @media (max-width: 500px) {
        font-size: 28px;
    }
`

const CardTech = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: max-content;
  gap: 20px;
  justify-content: center; 

  @media (max-width: 900px) {	
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 500px) {	
    grid-template-columns: repeat(2, 1fr);
  }
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  background-color: #171516;
  border-radius: 30px;


`

const CardImg = styled.img`

`




export {Main, Title, Image, Subtitle, Text, Container, Box, Wrapper, TextWrapper, LargeCard, SmallCard, ImageConatiner, CardTech, CardTitle, CardImg, CardWrapper }