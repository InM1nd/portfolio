import {Wrapper, Title, Subtitle, Text, Button, Image, Content } from './projects.module.jsx'
import LargeImage from '../../../img/other/Quizzley_Lg.png'
import SmallImage from '../../../img/other/Quizzley_Lg.png'

const Quizzley = () => {
    return (
      <Wrapper>
        <Title>Quizzley</Title>
        <Subtitle>AI Quizz App</Subtitle>
        <Content>
        <picture>
          <source media="(min-width: 901px)" srcSet={LargeImage} />
          <source media="(min-width: 701px) and (max-width: 900px)" srcSet={SmallImage} />
          <Image src={LargeImage} alt="Image" />
        </picture>
          <Button href='https://quizzley-production.up.railway.app/'>Learn</Button> 
        </Content>
      </Wrapper>
    )
  }
  
  export default Quizzley