import styled from '@emotion/styled';

const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1600px;

  padding: 0 20px;
  margin-bottom: 150px;

  @media (max-width: 1280px) {	
    width: 100%;
  }
`

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
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 45px;
  max-width: 1600px;
`;

const Card = styled.div`
  background-color: #383637;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;;
`;

const CardTile = styled.h4`
  font-weight: 400;
  font-size: 48px;
  color: #fff;
  margin-bottom: 20px;
  margin-left: 20px;
`

const SmallCard = styled(Card)`
  grid-column: span 2;

  @media (max-width: 1280px) {	
    grid-column: span 6;
  }
`;

const LargeCard = styled(Card)`
  grid-column: span 4;

  @media (max-width: 1280px) {	
    grid-column: span 6;
  }
`;

const Wrapper = styled.div`
  margin-top: 45px;
  padding: 20px;

  border-radius: 20px;
  width: 100%;
  background-color: #383637; 
`


export {Main, Title, Container, Card, CardTile, SmallCard, LargeCard, Wrapper, }