import {Wrapper, Title, Subtitle, Text, Button, Image, Content } from './projects.module.jsx'

import LargeImage from '../../../img/other/Oilfaces.png'

const Oilfaces = () => {
    return (
      <Wrapper>
      <Title>Oilfaces</Title>
      <Subtitle>Studio website</Subtitle>
      <Content>
        <picture>
          {/* <source media="(max-width: 900px)" srcSet={SmallImage} /> */}
          {/* <source media="(min-width: 901px)" srcSet={LargeImage} /> */}
          <Image src={LargeImage}/>
        </picture>
        <Button>Learn</Button>
      </Content>
      </Wrapper>
      
    )
  }
  
  export default Oilfaces