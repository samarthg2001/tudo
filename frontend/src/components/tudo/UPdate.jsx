import { GrUpdate } from "react-icons/gr";
import { FaRegWindowClose } from "react-icons/fa";
const UPdate =()=>{
    const stl={
        fontSize:"1.5em",
        display:"",
        border:"none",
        maxWidth:"80%",
        borderRadius:"10px",

    }
    return(
        <>
      
        <div className="main-update">
        <div className="update-tudo">
            <h1>Update your task</h1>
        <input type="text"  id="tobe-updated-title"/>
        <textarea name="" id="" cols="70" rows="10" style={stl}></textarea>
          <div className="updatebox-btn">       
         <button id="updatebox-update-btn"> Update  <GrUpdate /></button>
        <button id="close-btn">Close <FaRegWindowClose /></button>
        </div>

        </div></div>
        </>
    )
}
export default UPdate