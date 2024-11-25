import React from 'react'
import { VscBook } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {authActions } from "../store/index.js"
import P from "../../images/profile.png"

const Navbar = () => {
  const history=useNavigate();
    const dispath=useDispatch();

    
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIN);
      

  const logout=()=>{
    sessionStorage.clear("id");
    dispath(authActions.logout());
    history("/")
  }
  return (
    <div>
        <nav className='header'>
            <div className='logo'>
            <VscBook />
            
                <b>Tudo</b>
            </div>
            <ul className='list'>
            <Link to="/"> <li > Home</li> </Link>
            <Link to="/about">   <li> about us</li></Link>
                <Link to='/Tudo'> <li> tudo</li></Link>
            </ul>
            <div className='btn'>
        
           {isLoggedIn?(<>
            <button className='log-out-btn' onClick={logout}> Log Out </button>
             <img src={P} alt="photo not found" srcSet="" />
            {console.log("./profile.png")}
          
             <span>Welcome </span>
           </>)
           :(
            <>
                        <Link to="/SignIn" > 
            <button className='sign-In-btn'> Sign In</button></Link>   
            <Link to="/SignUp"   > 
             <button className='sign-out-btn'> Sign up</button></Link> 

</>
           )
           }
            </div>
        </nav>


    </div>
  )
}

export default Navbar


