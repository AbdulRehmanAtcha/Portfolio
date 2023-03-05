import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Project from './components/projects/Project';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <br /> */}
      <hr />
      <br />
      <br />
      <Home/>
      <br />
      <br />
      <About/>
      <br />
      <br />
      <Skills/>
      <br />
      <br />
      <Project/>
      <br />
      <br />
      <Contact/>
    </div>
  );
}

export default App;
