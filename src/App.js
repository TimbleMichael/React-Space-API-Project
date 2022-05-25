import React from 'react';
import './App.css';
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Apod from './components/Apod'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path='Apod' element={<Apod/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
