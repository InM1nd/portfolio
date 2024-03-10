import {Wrapper, Title, Subtitle, Text, Button, Image, Content} from './projects.module.jsx'
import LargeImage from '../../../img/other/Filmoteka_Lg.png'
import SmallImage from '../../../img/other/Filmoteka_Sm.png'

const Filmoteka = () => {
    return (
      <Wrapper>
        <Title>Filmoteka</Title>
        <Subtitle>Film library & tracker</Subtitle>
        <Content>
        <picture>
          <source media="(max-width: 700px)" srcSet={SmallImage} />
          <source media="(min-width: 701px)" srcSet={LargeImage} />
          <Image src={LargeImage}/>
        </picture>
        <Button href='https://okolobaha-me.github.io/quentin-filmotino/#en'>Learn</Button>
        </Content>
      </Wrapper>
    )
  }
  
  export default Filmoteka