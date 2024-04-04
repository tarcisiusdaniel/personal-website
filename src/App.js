import './App.css';
import Navbar from './components/Navbar/Navbar';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
// import { useState, useEffect } from 'react';

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
  // const [screenSize, setScreenSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // })

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     });
  //   };

  //   window.addEventListener('resize', handleResize);
  //   console.log(window.innerWidth);
  //   console.log(window.innerHeight);
  //   // Cleanup function to remove event listener
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);


  // const refArray = [topSection, aboutSection, experienceSection, skillsSection, projectsSection];
  // console.log(window.innerWidth);
  return (
    <>
      {/* The code to test resizing the screen */}
      {/* <p>Current width: {screenSize.width}</p>
      <p>Current height: {screenSize.height}</p> */}
      {/*  */}

      {/* fix the Navbar */}
      <Navbar /> 
      <Introduction />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
