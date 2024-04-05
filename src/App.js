import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore'
import Message from './pages/Message';
// import Navbar from './components/Navbar';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/message' element={<Message />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
