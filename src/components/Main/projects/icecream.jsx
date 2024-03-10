import {Wrapper, Title, Subtitle, Text, Button, Image, Content } from './projects.module.jsx'
import LargeImage from '../../../img/other/IceCream_Lg.png'
import SmallImage from '../../../img/other/IceCream_Sm.png'

const IceCream = () => {
    return (
      <Wrapper>
      <Title>IceCream</Title>
      <Subtitle>Landing page</Subtitle>
      <Content>
        <picture>
          <source media="(min-width: 901px)" srcSet={LargeImage} />
          <source media="(min-width: 701px) and (max-width: 900px)" srcSet={SmallImage} />
          <Image src={LargeImage} alt="Image" />
        </picture>
        <Button href="https://hordiienkoolha.github.io/ice-cream/">Learn</Button>
      </Content>
    </Wrapper>
      
    )
  }
  
  export default IceCream