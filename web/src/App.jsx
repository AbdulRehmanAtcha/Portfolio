import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";
import GridLoader from "react-spinners/GridLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
  }, []);
  return (
    <div>
      {loading ? (
        <div className="main-loader">
          <GridLoader
            color="#64ffda"
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <br />
          <br id="Home" />
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
          <br id="Contact" />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
