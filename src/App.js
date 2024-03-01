import './App.css';
import Navbar from './components/Navbar/Navbar';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import styled from 'styled-components';
import BgImg from './assets/bg-intro-bright.jpeg';
// import { useRef } from 'react';

// const BgImage = styled.div`
//   & {
//     background: url('./assets/bg-intro-bright.jpeg');
//   }
// `

function App() {
  // const topSection = useRef(null);
  // const aboutSection = useRef(null);
  // const experienceSection = useRef(null);
  // const skillsSection = useRef(null);
  // const projectsSection = useRef(null);

  // const refArray = [topSection, aboutSection, experienceSection, skillsSection, projectsSection];

  return (
    <>
      <div className = "bg-image" />
      {/* fix the Navbar */}
      <Navbar /> 
      <Introduction />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
