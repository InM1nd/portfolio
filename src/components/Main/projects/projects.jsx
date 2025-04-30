import {Main, Container, LargeCard, SmallCard, SectionTitle} from './projects.module.jsx'

import Skelya from './skelya'
import Oilfaces from './oilfaces'
import Dashboard from './dashboard'
import Boardy from './boardy'
import Filmoteka from './filmoteka'
import IceCream from './icecream'
import Nutrify from './nutrify'
import Head from '../head/head'
import Quizzley from './quizzley.jsx'


const Projects = () => {
    return (
      <Main>
        <Head/>
        <Container>
          <SmallCard>
            <Dashboard/>
          </SmallCard>
          <LargeCard>
            <Quizzley/>
          </LargeCard> 
          <LargeCard>
            <Boardy/>
          </LargeCard>  
          <SmallCard>
            <Filmoteka/>
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