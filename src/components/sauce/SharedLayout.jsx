import Header from '../Header/header_render'
import Footer from '../Footer/footer'
import Main_Nav from '../Main/main_nav/main_nav'

function SharedLayout (){
    return (
        <>
      <Header/>
      <Main_Nav/>
      <Footer/>
      </>
    );
  };

export default SharedLayout