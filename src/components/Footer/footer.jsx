import React, { useState, useEffect } from 'react';
import SpotifyNowPlaying from '../Main/applications/spotify/SpotifyNowPlaying.jsx';
import axios from 'axios';
import SpotifyLogo from '../../img/svg/mdi_spotify.svg'

import {Main, Wrapper, Wrapper_Left, Container, Label, Widget, Logo, Title, List, Item, Link} from "./footer.module.jsx"




const Footer = () => {



    return (
        <Main>
            <Wrapper>
                <Label>
                    © 2024 InM1nd 
                </Label>
                <Widget>
                    <Logo src={SpotifyLogo}/>
                    <SpotifyNowPlaying/>
                </Widget>
            </Wrapper>

            <Wrapper_Left>
                <Container>
                    <Title>Elsewhere</Title>
                    <List>
                        <Item>
                            <Link href='https://github.com/InM1nd'>Github</Link>
                        </Item>
                        <Item>
                            <Link href='https://www.linkedin.com/in/oleksandr-zabolotnyi1/'>Linkedin</Link>
                        </Item>
                        <Item>
                            <Link href='https://www.instagram.com/sanchezbltn/'>Instagram</Link>
                        </Item>
                        <Item>
                            <Link href='https://www.linkedin.com/in/oleksandr-zabolotnyi1/overlay/1635556298341/single-media-viewer/?profileId=ACoAAD3OKJEB3u_VtiYoXNFuBetFZN5odFcMuy8'>CV</Link>
                        </Item>
                    </List>
                </Container>

                <Container>
                <Title>Contact</Title>
                <List>
                    <Item>
                        <Link href='https://t.me/InM1nd'>Message</Link>
                    </Item>
                </List>
                </Container>
            </Wrapper_Left>
        </Main>
    )
}

export default Footer 







