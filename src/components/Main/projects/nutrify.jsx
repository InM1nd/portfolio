import {Wrapper, Title, Subtitle, Text, Button, Image, Content } from './projects.module.jsx'
import LargeImage from '../../../img/other/Nutrify_Lg.png'
import SmallImage from '../../../img/other/Nutrify_Sm.png'

const Nutrify = () => {
  return( 
    <Wrapper>
      <Title>Nutrify</Title>
      <Subtitle>Nutrition application</Subtitle>
      <Content>
        <picture>
          <source media="(min-width: 901px)" srcSet={LargeImage} />
          <source media="(min-width: 701px) and (max-width: 900px)" srcSet={SmallImage} />
          <Image src={LargeImage} alt="Image" />
        </picture>
        <Button href="https://inm1nd.github.io/calories_calculator/">Learn</Button>
      </Content>
    </Wrapper>
    )     
  }
  
  export default Nutrify