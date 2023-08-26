import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Course from '../pages/Course';
import About from '../pages/About';

import React, { useState, useEffect } from "react";
import "./navbar.scss";

import { AiFillCloseCircle } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  const [active, setActive] = useState("navbar");
  const [activeHeader, setAcH] = useState("header");

  const showNavBar = () => {
    setActive("navbar activeNavbar");
  };

  const hideNavbar = () => {
    setActive("navbar");
  };

  useEffect(() => {
    const addBg = () => {
      if (window.scrollY >= 10) setAcH("header activeH");
      else setAcH("header");
    };
    window.addEventListener("scroll", addBg);
    return () => window.removeEventListener("scroll", addBg);
  }, []);

  return (
    
    <header className={activeHeader}>
      <div className="logoDiv">
        <h1 className="logo">
          <p onClick={() => scrollTo("home")}>
            Yoga Buddy
          </p>
        </h1>
      </div>
      <div className={active}>
      <Router>
        <ul className="navLists">
          <li className="navItem" onClick={() => scrollTo("home")}>
          <Link to="/">Home</Link>
          </li>
          <li className="navItem" onClick={() => scrollTo("skills")}>
          <Link to="/about">About Us</Link>
          </li>
          <li className="navItem" onClick={() => scrollTo("projects")}>
          <Link to="/course">Course</Link>
          </li>
        </ul>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/course' element={<Course />} />
          </Routes>
      </Router>

        

        <div onClick={hideNavbar} className="closeNavbar">
          <AiFillCloseCircle className="icon" />
        </div>
      </div>

      <div onClick={showNavBar} className="toggleNavbar">
        <CgMenuGridO className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
