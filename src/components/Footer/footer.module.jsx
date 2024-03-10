import styled from '@emotion/styled'

const Main = styled.footer`
	display: flex;
	justify-content: center;
  
	
  padding: 0 20px;
  margin-top: 150px;
  margin-bottom: 300px;

  font-family: "Kanit", sans-serif;

 

  @media (max-width: 900px) {
    padding: auto;
    flex-direction: column;

    align-items: center;
  }

  @media (max-width: 500px) {
    padding: 0 20px;

    align-items: start;
  }

`
const Wrapper = styled.div`
  margin-right: 300px;

  @media (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    margin-right: 0px;
  }

  @media (max-width: 900px) {
    width: auto;
  }

 
`

const Wrapper_Left = styled.div`

  display: flex;
  

  @media (max-width: 900px) {
    flex-direction: row;
    margin-top: 150px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const Container = styled.div`

  &:last-child{
    margin-left: 100px;

    @media (max-width: 500px) {
    margin-left: 0;
    margin-top: 70px;
    }
  }

  
`

const Label = styled.p`
  
  font-weight: 400;
  font-size: 32px;
  color: #fff;
`

const Widget = styled.div`
width: fit-content;
  margin-top: 20px;
  display: flex;
  
  border-radius: 50px;
  background: #797878;
  
  padding: 12px 20px;
`

const Logo = styled.img`
  
`

const Title = styled.h2`
  margin-bottom: 40px;

  font-weight: 400;
  font-size: 32px;
  color: #fff;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 20px;

  font-weight: 300;
  font-size: 24px;
  color: #fff;
`

const Item = styled.li`

`

const Link = styled.a`

`



    export {Main, Wrapper,  Wrapper_Left, Container, Label, Widget, Logo, List, Title, Item, Link, }
