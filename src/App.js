import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar.js'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Workshops from './components/Workshops/Workshops.js';
import Admin from './components/Admin/Admin.js';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Workshops' element={<Workshops/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        
          </Routes>
    </>
  );
}

export default App;
