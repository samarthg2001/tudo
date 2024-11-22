import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { useNavigate } from 'react-router';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'
import {  useDispatch } from 'react-redux';
import { authActions } from '../store/index.js';


const SignIn = () => {
  const displatch=useDispatch();
  const history=useNavigate();
const [input,setInput]=useState({
  email:"",
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
    const res = await axios.post("http://localhost:8000/api/signIn", input);
=======
    const res = await axios.post("https://tudo-gules.vercel.app/?vercelToolbarCode=XZb3AFJLvOVE8lY/api/signIn", input);
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
      setInput({
          email: "",
          password: ""
      });
      console.log(res);
      sessionStorage.setItem("id",res.data._id)
      console.log(res.data._id);
        displatch(authActions.login())
      const {data}=res;
        const data_name=data.name;
          const userName="welcome "+data_name
          toast.success(userName,{autoClose:1500,}),

          history("/Tudo")

      
  } catch (err) {
      const {response}=err
      console.log(err);
      console.log("catch block");

      console.log( " the error is",response.data.message);
       const erro=response.data.message
        toast.error(erro,{autoClose:2000,})
      setInput({
        email: "",
        password: ""
    });  
    }
}

  return (
    <>   

     <div className='signIN-page'>
    
     <div className='left-side'>
     <ToastContainer/>
   
        <h1> sign In  </h1>
    </div>
    <div className='write-side'>
    <input type="text" name="email" id=""  placeholder='enter your Email for sign in' className='email' onChange={change} value={input.email}/>
    <input type="password" name="password" id=""  placeholder='enter your password' className='password'  onChange={change} value={input.password}/>
    <button className='sign-in-btn' onClick={submit}> Sign in</button>
    </div>
</div>
</>
  )
}

<<<<<<< HEAD
export default SignIn;
=======
export default SignIn;
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
