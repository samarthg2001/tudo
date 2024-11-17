import { useState } from 'react'
import "./components/Home/home.css"
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import "./components/About/about.css"
import SignUp from './components/signup/SignUp.jsx'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import "./components/navBar/navbar.css"
import Navbar from './components/navBar/Navbar.jsx'
import SignIn from './components/signIN/SignIn.jsx'
import "./components/signIN/signIn.css"
import "./components/signup/signUp.css"
import Tudo from './components/tudo/Tudo.jsx'
import "./components/tudo/tudo.css"
import { useEffect } from 'react'
import {  useDispatch } from 'react-redux';
import { authActions } from './components/store/index.js';


function App() {
  const displatch=useDispatch();
  useEffect(()=>{
    console.log();
    const id=sessionStorage.getItem("id")
    if(id)displatch(authActions.login())
    
  
  },[])
  return(
  <>
  <Router>
  <Navbar/>
   <Routes>
  
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />  
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />   
          <Route path="/Tudo" element={<Tudo />} />
  
  
    </Routes>
    </Router>   
  
  </>
)
}

export default App
