import React from 'react'
import Navbar from './components/header/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/home/Home';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
          <Navbar></Navbar>
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="/About" element={<Home />}></Route>
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
