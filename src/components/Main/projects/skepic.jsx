
import {Wrapper, Title, Subtitle, Text, Button, Image, Content } from './projects.module.jsx'
import LargeImage from '../../../img/other/Skeptic_Lg.jpg'
import SmallImage from '../../../img/other/Skeptic_Sm.jpg'

const Skeptic = () => {
    return (
      <Wrapper>
      <Title>Skeptic</Title>
      <Subtitle>Fitness platform</Subtitle>
      <Content>
        <picture>
          <source media="(max-width: 700px)" srcSet={SmallImage} />
          <source media="(min-width: 701px)" srcSet={LargeImage} />
          <Image src={LargeImage}/>
        </picture>
        <Button href="#" >Learn</Button>
      </Content>
      </Wrapper>
      
    )
  }
  
  export default Skeptic