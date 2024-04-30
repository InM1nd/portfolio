import {Main, Container, LargeCard, SmallCard, SectionTitle} from './projects.module.jsx'

import Skelya from './skelya'
import Oilfaces from './oilfaces'
import Dashboard from './dashboard'
import Boardy from './boardy'
import Filmoteka from './filmoteka'
import IceCream from './icecream'
import Nutrify from './nutrify'
import Head from '../head/head'


const Projects = () => {
    return (
      <Main>
        <Head/>
        <Container>
          <SmallCard>
            <Dashboard/>
          </SmallCard>
          <LargeCard>
            <Boardy/>
          </LargeCard>  
          <LargeCard>
            <Filmoteka/>
          </LargeCard>
          <SmallCard>
            <IceCream/>
          </SmallCard>  
        </Container>
        <SectionTitle>In Progress</SectionTitle>
        <Container>
          <SmallCard>
            <Nutrify/>
          </SmallCard> 
          <LargeCard>
            <Skelya/>
          </LargeCard>
        </Container>
      </Main>
    )
  }
  
  export default Projects