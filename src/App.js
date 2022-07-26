import React, { useEffect } from "react";
import Nav from './components/js/Nav';
import Home from './components/js/Home';
import About from './components/js/About';
import Frameworks from './components/js/Frameworks';
import Education from './components/js/Education';
import Projects from './components/js/Projects';
import Contact from './components/js/Contact';
import PageNotFound from './components/js/PageNotFound';
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/frameworks" element={<Frameworks />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
