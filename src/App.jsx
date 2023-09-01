import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Course from './pages/Course';
import About from './pages/About';
import Navbar from './components/navbar';

function App() {
  return (
    <>
       <Navbar/>
       <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/course' element={<Course />} />
          </Routes>
    </>

  );
}


export default App;
