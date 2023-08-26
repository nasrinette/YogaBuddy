import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Course from './pages/Course';
import About from './pages/About';
import Navbar from './components/navbar';

function App() {
  return (
   <Navbar/>
  );
}


export default App;
