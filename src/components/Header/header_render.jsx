
import React from 'react';

import {Main, Nav, Menu, Item, NavLinkStyled } from './header.module.jsx'


const Header = () => {

    return (
        <Main>
        <Nav>
            <Menu>
            <Item>
                <NavLinkStyled to="/portfolio/projects" >
                Projects
                </NavLinkStyled>
            </Item>
            <Item>
                <NavLinkStyled to="/portfolio/about" >
                About
                </NavLinkStyled>
            </Item>
            <Item>
                <NavLinkStyled to="/portfolio/applications" >
                Play
                </NavLinkStyled>
            </Item>
            <Item>
                <NavLinkStyled to="/portfolio/greet" >
                Contact
                </NavLinkStyled>
            </Item>
            </Menu>
        </Nav>
        </Main>
    )
}

export default Header 