import React from 'react'
import { useState } from 'react';
import TudoCard from './TudoCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./tudoCard.css"
import UPdate from './UPdate';
import './UPdate.css'
import { GrUpdate } from "react-icons/gr";
import { FaRegWindowClose } from "react-icons/fa";
import { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
let tobeupadeArray={}
let id=sessionStorage.getItem("id")



const Tudo = () => {
  const [input,setinput]=useState({title:"",body:""})
  const [Array,setArray]=useState([])
  const [updateData,setupdateData]=useState({updatedtitle:"",updatedbody:""})
  const [buttonColor, setButtonColor] = useState("red");

const handleMouseOut = () => setButtonColor("red");
const handleMouseOver = () => setButtonColor("green");

  const dispatch = useDispatch();

  console.log(dispatch);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIN);
    
console.log(isLoggedIn);



  const updateTask= async ()=>{
      try {
        console.log("updateTask : frond end");
        
        console.log(updateData._id);
        const {title,body}=updateData
      const response= await axios.put(`http://localhost:8000/api/updateTask/${updateData._id}`,{
        title:title,
        body:body
      })
      setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === updateData._id
          ? { ...task, title: updateData.title, body: updateData.body }
          : task
      )
    );
    
      console.log(response);   
        
      } catch (error) {
        console.log(error);
      }


    console.log(updateData);
  }
const change=(e)=>{
const {name,value}=e.target;
setinput({...input,[name]:value})

}
const submit= async()=>{

    if(input.title==="" || input.body==="" ){
      if(input.title===""&&input.body==="")
      {toast.error("please enter the task")}
      else if(input.title===""){toast.error("please enter the title")}
      else
      {toast.error("please enter the content") }     

    }

    else{
    if(id){
      await axios.post("http://localhost:8000/api/addTask", 
      {title:input.title,
        body:input.body,
        id:id})
      .then((res)=>
      {console.log("this is addtask function");
        }).catch((err)=>{console.log(err);})
        setArray(preArray=>[...preArray,input])
        setinput({title:"",body:""})
        toast.success("your task is added",{ autoClose: 2000,})   
      }     
      else{ 
    setArray(preArray=>[...preArray,input])
    setinput({title:"",body:""})
    toast.success("your task is added",{ autoClose: 2000,})
    toast.error("your task is not saved ! please sign in ",{ autoClose: 4000,})
      }
  }
    const tudobtn=document.getElementById("t-btn")
    tudobtn.style.backgroundColor="green"
    
    

    tudobtn.addEventListener('mouseout',()=>{
        tudobtn.style.backgroundColor="red";
    })
  
}
const del= async (cardid)=>{
  console.log(cardid);
  if(id){
  try {
    const res=await axios.delete(`http://localhost:8000/api/deleteTask/${cardid}`)
    console.log(res);
    toast.success("Task is deleted")
  } catch (error) {
    console.log(error);
  }}
  else{
  const deltedTask=Array.filter((_,i)=>i!==id)
  toast.success("Task is deleted but not saved !")
  setArray(deltedTask)
  }

}
const  show=()=>{
    const textareaBLock=document.getElementById("text-area");
    textareaBLock.style.display="inline"
}
const displayupdatebox=(indiualBoxid)=>{
  const updatebox=document.getElementById('tudo-update')
  console.log(indiualBoxid);
   tobeupadeArray=Array[indiualBoxid]
   setupdateData(tobeupadeArray);
    console.log(tobeupadeArray._id);
   console.log(tobeupadeArray);
  updatebox.style.display="block"
}

const closeupdatebox=()=>{
  const updatebox=document.getElementById('tudo-update')
  updatebox.style.display="none"
}
const stl={
  fontSize:"1.5em",
  border:"none",
  maxWidth:"80%",
  borderRadius:"10px",

}
useEffect(()=>{

  console.log("this is use effect method");
  const fetch=async ()=>{
   await axios.get(`http://localhost:8000/api/fetchbyID/${id}`)
   .then((res)=>{ setArray(res.data);
    })
   .catch((err)=>{console.log(err);})
  }
  fetch()
},[updateData,id, isLoggedIn])
const onUpdateChange = (e) => {
  const { name, value } = e.target;
  setupdateData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

    return (<>
    <div  className='tudo'>
      <ToastContainer />
      <div className='filed'>
    <input type="text"  
    className='input-filed' 
    placeholder='title' 
    onClick={show}
    name='title'
    value={input.title}
    
    onChange={change}  />
  </div>
  <div> <textarea  
            onChange={change}
    name='body'
      value={input.body
    }
      placeholder = "content"  id="text-area" cols="30" rows="10"></textarea>
  </div>
  <button
  id="t-btn"
  style={{ backgroundColor: buttonColor }}
  onClick={submit}
  onMouseOver={handleMouseOver}
  onMouseOut={handleMouseOut}
>
  Add
</button>;
    </div>    
    <div className='tudo-body'> 
    <div className='container'>
    { Array && Array.map((ele,index)=>
             <div key={index} className='child'>
                <TudoCard 
                  title={ele.title}
                  body={ele.body}
                  id={ele._id}
                  delid={del}
                  fn={displayupdatebox}
                  updateId={index}
                  
                />

             </div>
                     
        )}
    </div>
        
    </div>

    <div className='tudo-update' id='tudo-update'>
             
    <div className="main-update" >
        <div className="update-tudo">
            <h1>Update your task</h1>
        {/* <input type="text" name='title' id="title" value={updateData.title} onChange={onUpdateChange}/>
        <textarea name="body" id="body" cols="70" rows="10" style={stl} value={updateData.body} onChange={onUpdateChange}></textarea> */}
         <input
              type="text"
              id="title"
              name="updatedtitle"
              value={updateData.title}
              onChange={onUpdateChange}
            />
            <textarea
              name="updatedbody"
              id="body"
              cols="70" rows="10" style={stl} 
              value={updateData.body}
              onChange={onUpdateChange}
            />
       
          <div className=" update-btn">       
         <button id="update" onClick={updateTask}> Update  <GrUpdate /></button>
        <button id="close" onClick={closeupdatebox}>Close <FaRegWindowClose /></button>
        </div>

        </div></div>
          </div>
    </>
  )
}

export default Tudo
