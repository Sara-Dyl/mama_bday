import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Memories from './pages/Memories';
import Category from './pages/Category';
import Music from './pages/Music';
import ShowLove from './pages/ShowLove';
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div className="app-page">
      <div className="content">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/memories/:categoryName" element={<Category />} />
          <Route path="/music" element={<Music />} />
          <Route path="/showlove" element={<ShowLove />} />
        </Routes>
      </Router>
      </div>
      <Footer />
    </div>

  );
}

export default App;