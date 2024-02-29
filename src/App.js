import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      {/* fix the Navbar */}
      <Navbar /> 
      <Introduction/>
      <About />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
