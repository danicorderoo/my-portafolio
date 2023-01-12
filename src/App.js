import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./page/Home";
import About from "./page/About";
import Projects from "./page/Projects";
import Contact from "./page/Contact";
import Movie from "./page/Movie";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/movie" element={<Movie />} />
      </Routes>

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}

export default App;
