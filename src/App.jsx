import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/sauce/SharedLayout';
import Services from './components/Main/services/services'
import Projects from './components/Main/projects/projects'
import About from './components/Main/team/team'
import Talk from './components/Main/talk to us/talk';
import Head from './components/Main/head/head'


import './App.module.scss';


function App () {
  return (
    
    <Routes>
      <Route path="/portfolio" element={<SharedLayout />}>
        <Route index element={<Head />} /> 
        <Route path="/portfolio/projects" element={<Projects />} /> 
        <Route path="/portfolio/services" element={<Services />} /> 
        <Route path="/portfolio/about" element={<About />} /> 
        <Route path="/portfolio/greet" element={<Talk />} /> 
        <Route path="*" element={<Head />} /> 
      </Route>
    </Routes>
    
  );
}

export default App;
