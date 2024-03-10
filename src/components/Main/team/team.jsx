import React, { useEffect, useRef } from 'react';
import {Main, Title, Image, Subtitle, Text, CardWrapper, Container, Box, Wrapper, TextWrapper, LargeCard, SmallCard, ImageConatiner, CardTech, CardTitle, CardImg } from './team.module'
import Sanya from '../../../img/other/SANYA.jpg'

const Team = () => {

    const cardRef = useRef();

    return ( 
        <Main>
            <Title>I’m Alex.</Title>

            <Container>
                <ImageConatiner>
                    <Image src={Sanya}/>
                </ImageConatiner>
                <TextWrapper>
                    <Subtitle>I'm a Front End Developer working in Vienna, Austria.</Subtitle>
                    <Text>My primary goal is to create visually appealing, functional, and user-friendly websites and applications. I believe that a combination of creative solutions and technology is key to success. </Text>
                    <Text>That is why I try always to stay up-to-date and continue to explore best practices to improve my skills. I strongly emphasize teamwork, clear and transparent communication is crucial for successful project implementation.</Text>
                </TextWrapper>
            </Container>

            <Box>
            <Wrapper>
                
                <LargeCard>
                    <CardTitle>Tech stack</CardTitle>
                    <CardTech>
                        <CardWrapper>
                            <CardImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
                        </CardWrapper>
                        <CardWrapper>
                            <CardImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"/>
                        </CardWrapper>
                        <CardWrapper>
                            <CardImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"/>
                        </CardWrapper>
                        <CardWrapper>
                            <CardImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/>
                        </CardWrapper>
                        <CardWrapper>
                            <CardImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
                        </CardWrapper>
                        <CardWrapper>
                        <CardImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"/>
                        </CardWrapper>
                        <CardWrapper>
                            <CardImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"/>
                        </CardWrapper>
                        <CardWrapper>
                            <CardImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" />
                        </CardWrapper>
                        <CardWrapper>
                            <CardImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"/>
                        </CardWrapper>
                    </CardTech>
                </LargeCard>

                <SmallCard>
                    <CardTitle>Hobbies</CardTitle>
                    
                </SmallCard>
                <SmallCard>
                    <CardTitle>Leisure</CardTitle>
                    
                </SmallCard>
            </Wrapper>
            </Box>
        </Main>
        )
    }
    
    export default Team

