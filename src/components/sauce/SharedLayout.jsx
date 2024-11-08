import Header from '../Header/header_render'
import Footer from '../Footer/footer'
import Main_Nav from '../Main/main_nav/main_nav'
import Background from '../sauce/Background/Background'

function SharedLayout (){
    return (
      <>
      <Background/>
      <Header/>
      <Main_Nav/>
      <Footer/>
      </>
    );
  };

export default SharedLayout