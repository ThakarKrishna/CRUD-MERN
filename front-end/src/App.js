import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import AddEdit from './Components/AddEdit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import View from './Components/View';

const App = () => {
  return (

    <Router>
      <ToastContainer position='top-center' />
      <Header/>
      <Routes>

        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/add" element={<AddEdit/>}></Route>
        <Route path="/add/:id" element={<AddEdit/>}></Route>
        <Route path="/view" element={<View/>}></Route>
        <Route path="/view/:id" element={<View/>}></Route>


        <Route path="/about" element={<About/>}></Route>










      </Routes>
    </Router>
  )
}

export default App;