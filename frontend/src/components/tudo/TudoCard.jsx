import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const TudoCard = (props) => {
  const title1=props.title;
  const body1=props.body
  const id1=props.id
 const delid1=props.delid;
 const fun=props.fn;
 const updatedId=props.updateId;
 const dispath=useDispatch();
 console.log(dispath);
 const isLoggedIn = useSelector((state) => state.auth.isLoggedIN);
 
 const updateBoxdisplay=()=>{
      fun(updatedId)

 }
  const deletetask = () =>{
    console.log(updatedId);
    delid1(id1,updatedId)
  
  }


  return (
    <div className='tudoCard'>
      <div id="content-box">
        <div id="content-box-title" >
        <h1 id="title"> {title1.split("",10)}   </h1>
        </div>
        <div id="content-box-body">
        <p id='body'>  {body1.split("",100)}...
        </p></div>
      </div>
      <div id='icons'>
      <button id='update' onClick={updateBoxdisplay}> Update <GrUpdate className='update-icon'  onClick={updateBoxdisplay}/> </button>
     <button id='delete' onClick={deletetask}>Delete <MdDeleteForever  onClick={deletetask} className='delete-icon'/></button>     
  
      
    
      </div>
      
    </div>
  )
}

export default TudoCard
