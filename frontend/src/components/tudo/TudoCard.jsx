import React, { useState  } from 'react'
import { MdDeleteForever, MdOutlineIncompleteCircle} from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { AiFillCarryOut } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

<<<<<<< HEAD
const TudoCard = (props) => {
  const taskstate=props.taskstate;
 
  const [task,settask]=useState()
=======

const TudoCard = (props) => {
  const [task,settask]=useState(false)
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
  const title1=props.title;
  let taskCompleted=""
  const body1=props.body
  const id1=props.id
 const delid1=props.delid;
 const fun=props.fn;
 const updatedId=props.updateId;
 const dispath=useDispatch();
<<<<<<< HEAD
  const updatetask=props.taskcompletion; 
  // console.log(updatetask);     
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIN);
 const updateBoxdisplay=()=>{
      fun(updatedId)
 }
  const deletetask = () =>{
    // console.log(updatedId);
    delid1(id1,updatedId)
  }
  if(!taskstate){taskCompleted="Completing"}
  else{taskCompleted="Completed"}
  const completed=()=>{
    if(isLoggedIn){  
      updatetask(updatedId)
  }
    else{
      toast.display("Log in to complete")
    }
}

  const style1={
    display:taskstate?"none":""
    }
    const style2={
      backgroundColor: taskstate?"lightgray":""
=======
 console.log(dispath);
 
 const updateBoxdisplay=()=>{
      fun(updatedId)

 }
  const deletetask = () =>{
    console.log(updatedId);
    delid1(id1,updatedId)
  
  }
  if(!task){
    taskCompleted="Completing"
    
   }
   else{
    taskCompleted="Completed"
   }
  const completed=()=>{
  settask((prestate)=>!prestate)
}

  const style1={
    display:task?"none":""
    }
    const style2={
      backgroundColor: task?"lightgray":""
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11

    }
    const Completebuttonstyle1 ={
      backgroundColor: "snow",
      color: "black",
      padding: "10px",
      flex: "1",
     
      fontSize: "1em",
      borderRadius: "10px",
      margin: "10px",
      cursor: "pointer",
  }
  const Completebuttonstyle2 ={
    backgroundColor: "red",
    color: "snow",
    fontWeight: "bold",
    padding: "10px",
    flex: "1",
    fontSize: ".93em",
    borderRadius: "10px",
    margin: "10px",
    cursor: "pointer",
}

<<<<<<< HEAD
const btn= taskstate? <AiFillCarryOut onClick={completed} />:<MdOutlineIncompleteCircle  onClick={completed}/>
=======
const btn= task? <AiFillCarryOut onClick={completed} />:<MdOutlineIncompleteCircle  onClick={completed}/>
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11


  return (
    <div className='tudoCard' style={style2}>
      <div id="content-box">
        <div id="content-box-title" >
        <h1 id="title"> {title1.split("",10)}   </h1>
        </div>
        <div id="content-box-body">
        <p id='body'>  {body1.split("",100)}...
        </p></div>
      </div>
      <div id='icons'>
      <button id='update' onClick={updateBoxdisplay} style={style1}> Update <GrUpdate className='update-icon'  onClick={updateBoxdisplay}/> </button>
      
<<<<<<< HEAD
      <button id='complete' onClick={completed} style={taskstate?Completebuttonstyle1:Completebuttonstyle2}> {taskCompleted} {btn} </button>
=======
      <button id='complete' onClick={completed} style={task?Completebuttonstyle1:Completebuttonstyle2}> {taskCompleted} {btn} </button>
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
     <button id='delete' onClick={deletetask} style={style1}>Delete <MdDeleteForever  onClick={deletetask}  className='delete-icon'/></button>     
  
      
    
      </div>
      
    </div>
  )
}

export default TudoCard
