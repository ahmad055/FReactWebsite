import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {Routes, Route } from 'react-router-dom';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <>
    <Navbar/>
    <Routes >
       <Route exact path='/'  element={<Home/>} />
       <Route exact path='/services'  element={<Services/>} />
       <Route exact path='/about'  element={<About/>} />
       <Route exact path='/contact'  element={<Contact/>} />
       
       

    </Routes>


    <Footer/>
    

  
       
    </>
  );
}

export default App;
