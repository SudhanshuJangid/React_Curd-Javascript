import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Router/Home';
import About from './Router/About';
import SideNav from './Components/SideNav';
function App() {
  return <>
    <SideNav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>

}

export default App;
