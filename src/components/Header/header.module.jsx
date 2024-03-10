import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";


const Main = styled.header`
	display: flex;
	justify-content: center;
	
	position:fixed;
	top: 0;

	z-index: 10;

	width: 100%;
`

const Nav = styled.nav`
	display: flex;
  justify-content: center;
  align-items: center;
	height: 100%;

	border-radius: 50px;
	backdrop-filter: blur(10px);
	
	margin-top: 50px;
	margin: 20px;

	@media (max-width: 500px) {	
		
    width: 100%;

		margin-top: 20px;
  }
`

const Menu = styled.ul`
	display: flex;
	height: 100%;

	font-family: "Kanit", sans-serif;
	font-weight: 400;
	font-size: 24px;
	color: #d9d9d9;

	border-radius: 50px;
	background: rgba(217, 217, 217, 0.4);

	padding: 20px 15px;

	gap: 20px;

	@media (max-width: 500px) {
		gap: 10px;
    font-size: 18px;

		width: 100%;
		justify-content: space-between;
  }

	@media (max-width: 400px) {
		font-size: 16px;
    gap: 5px;
  }
`


const Item = styled.li`
	border-radius: 50px;
	width: auto;
	height: 100%;

	
	text-decoration: none;
	transition: all 0.3s ease;
`

const NavLinkStyled = styled(NavLink)`
	width: 100%;

	padding: 10px 15px;
	border-radius: 50px;
	text-decoration: none;
	transition: all 0.3s ease;
	
	&:hover{
		background: #383637;
	}
 
	&.active {
		background: #383637;
	}
`;



export {Main, Nav, Menu, Item, NavLinkStyled }










