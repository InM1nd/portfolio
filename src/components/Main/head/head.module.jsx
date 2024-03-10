import styled from '@emotion/styled';


const Main = styled.section`
	
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;

  margin-top: 245px;
  margin-bottom: 150px;

  font-family: "Kanit", sans-serif;


  @media (max-width: 1280px) {
    margin-top: 200px;
    margin-bottom: 100px;
  }


  @media (max-width: 900px) {
    margin-top: 200px;
    margin-bottom: 100px;
    padding: 0 20px;
  }

  @media (max-width: 500px) {
    
  }
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 48px;
  text-align: center;
  color: #fff;
`

const Subtitle = styled.h1`
  margin-bottom: 60px;

  font-weight: 400;
  font-size: 48px;
  text-align: center;
  color: #fff;
`

const Text = styled.p`
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: #fff;
`




export {Main, Title, Subtitle, Text }