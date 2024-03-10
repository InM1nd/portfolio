import {Main, Container, LargeCard, SmallCard, SectionTitle} from './projects.module.jsx'

import Skeptic from './skepic'
import Oilfaces from './oilfaces'
import Dashboard from './dashboard'
import Skelya from './skelya'
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
            <Filmoteka/>
          </LargeCard>
          <LargeCard>
            <Skelya/>
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
            <Skeptic/>
          </LargeCard>
        </Container>

      </Main>
    )
  }
  
  export default Projects