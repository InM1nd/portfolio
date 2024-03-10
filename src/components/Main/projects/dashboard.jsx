import {Wrapper, Title, Subtitle, Text, Button, Image, Content } from './projects.module.jsx'
import LargeImage from '../../../img/other/Dashboard_Lg.png'
import SmallImage from '../../../img/other/Dashboard_Sm.jpg'

const Dashboard = () => {
    return (
      <Wrapper>
        <Title>Dashboard</Title>
        <Subtitle>Custom admin panel</Subtitle>
        <Content>
        <picture>
          <source media="(min-width: 901px)" srcSet={LargeImage} />
          <source media="(min-width: 701px) and (max-width: 900px)" srcSet={SmallImage} />
          <Image src={LargeImage} alt="Image" />
        </picture>
          <Button href='https://inm1nd.github.io/react_admin/'>Learn</Button> 
        </Content>
      </Wrapper>
    )
  }
  
  export default Dashboard