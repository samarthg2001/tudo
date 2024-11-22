import React from 'react'
import { useNavigate } from 'react-router';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const SignUp = () => { 

  const history=useNavigate();

const [input,setInput]=useState({
  email:"",
    name:"",
    password:""
})
const change=  (e)=>{
  const {name,value}=e.target;
  setInput({...input,[name]:value})
}

const submit = async (e) => {
  e.preventDefault();
  try {
    console.log(input);
    console.log(e);
<<<<<<< HEAD
    const res = await axios.post("http://localhost:8000/api/register", input);
=======
    const res = await axios.post("https://tudo-gules.vercel.app/?vercelToolbarCode=XZb3AFJLvOVE8lY/api/register", input);
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
      setInput({
          email: "",
          name: "",
          password: ""
      });
      alert("User successfully Created")
      history("/SignIn")
  } catch (err) {
      const {response}=err
      console.log(err);
      console.log("catch block");
      console.log( " the error is",response.data.message);
        toast.error(response.data.message)
      setInput({
        email: "",
        name: "",
        password: ""
    });  
    }
}


  return (
        <div className='signup-page'>
              <ToastContainer />  
            <div className='left-side'>
            
            <input type="text" name="email" id=""  placeholder='enter your Email' className='email' onChange={change} value={input.email}/>
            <input type="text" name="name" id=""  placeholder='enter your User name' className='name' onChange={change} value={input.name}/>
            <input type="password" name="password" id=""  placeholder='enter your password' className='password' onChange={change} value={input.password}/>
            <button className='sign-up-btn' onClick={submit}> Sign Up</button> 
                </div>
            <div className='write-side'>
              
            <h1> sign Up  </h1>
            </div>


    </div>
  )
}

export default SignUp



