import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/home'
import FactOne from './Components/factOne';
import FactTwo from './Components/factTwo';
import FactThree from './Components/factThree';
import './Styles/home.css'

function App() {
  return (
    <BrowserRouter basename='/FactsFun-'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factOne" element={<FactOne />} />
        <Route path="/factTwo" element={<FactTwo />} />
        <Route path="/factThree" element={<FactThree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
