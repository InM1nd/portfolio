import {Wrapper, Title, Subtitle, Text, Button, Image, Content } from './projects.module.jsx'
import LargeImage from '../../../img/other/Skelya_Lg.png'
import SmallImage from '../../../img/other/Skelya_Sm.png'

const Skelya = () => {
    return (
      <Wrapper>
      <Title>Skelya</Title>
      <Subtitle>Career development platform</Subtitle>
      <Content>
        <picture>
          <source media="(max-width: 700px)" srcSet={SmallImage} />
          <source media="(min-width: 701px)" srcSet={LargeImage} />
          <Image src={LargeImage}/>
        </picture>
        <Button href='https://skelya.careers/'>Learn</Button>
      </Content>
      </Wrapper>
      
    )
  }
  
  export default Skelya
