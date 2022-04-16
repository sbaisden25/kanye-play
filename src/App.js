import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home';
import Runaway from './pages/runaway/Runaway';
import Famous from './pages/famous/Famous';
import GoodMorning from './pages/goodmorning/GoodMorning';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (

    <BrowserRouter>

    <Nav />

        <Routes>

        <Route path="/" element={<Home />} />

          <Route path="/runaway" element={<Runaway />} />

          <Route path="/famous" element={<Famous />} />

          <Route path="/goodmorning" element={<GoodMorning />} />
          

        </Routes>

      <Footer />

      </BrowserRouter>
      

  );
}

export default App;