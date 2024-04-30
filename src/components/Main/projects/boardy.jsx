import {Wrapper, Title, Subtitle, Text, Button, Image, Content } from './projects.module.jsx'
import LargeImage from '../../../img/other/Boardy_Lg.jpg'
import SmallImage from '../../../img/other/Boardy_Lg.jpg'

const Boardy = () => {
    return (
      <Wrapper>
        <Title>Boardy</Title>
        <Subtitle>Notion web clone</Subtitle>
        <Content>
        <picture>
          <source media="(min-width: 901px)" srcSet={LargeImage} />
          <source media="(min-width: 701px) and (max-width: 900px)" srcSet={SmallImage} />
          <Image src={LargeImage} alt="Image" />
        </picture>
          <Button href='https://balanced-presence-production.up.railway.app/'>Learn</Button> 
        </Content>
      </Wrapper>
    )
  }
  
  export default Boardy