import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <Home />
      <br id="About" />
      <br />
      <About />
      <br id="Skills" />
      <br />
      <Skills />
      <br id="Projects" />
      <br />
      <br />
      <br />
      <Project />
      <br id="Contact"/>
      <Contact />
    </div>
  );
}

export default App;
