import {Main, Title, Container, CardTile, SmallCard, LargeCard, Wrapper} from './applications.module'
import TicTac from './tictac/tictac'
import Weather from "./weather/weather";
import InteractiveCanvas from "./testim/testim"

const Applications = () => {

    
    return (
        <Main>
            <Title>Play.</Title>
            <Container>
                <SmallCard>
                <CardTile>Weather</CardTile>
                    <Weather/>
                </SmallCard>
                <LargeCard>
                <CardTile>TicTacToe</CardTile>
                    <TicTac/>
                </LargeCard>
            </Container>
            
            <Wrapper>
            <CardTile>Drawing Place</CardTile>
                <InteractiveCanvas/>
            </Wrapper>
        </Main>   
    )
}

export default Applications 




