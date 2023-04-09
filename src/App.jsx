
import Header from './components/Header/header_render'
import Head from './components/Main/head/head'
import Projects from './components/Main/projects/projects';
import Services from './components/Main/services/services';
import Team from './components/Main/team/team';
import Talk from './components/Main/talk to us/talk';
import Footer from './components/Footer/footer';


// import './App.module.scss';

function App() {
  return (
    <>
    <Header/>
    <Head/>
    <Projects/>
    <Services/>
    <Team/>
    <Talk/>
    <Footer/>
    </>
  );
}

export default App;
