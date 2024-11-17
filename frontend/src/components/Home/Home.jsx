import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const history=useNavigate();
  const change=()=>{
  history("/Tudo")}
  return (
    <>
  
    <div className='home'>
    
        <h1> Organize your Work and life ,finally</h1>
        <p> Become focused organized and calm with </p>
      <p> Tudo app The world #1 task manager app</p>
      <button className='home-btn' onClick={change} > Make todo list</button>
    </div>

    </>)
}

export default Home
