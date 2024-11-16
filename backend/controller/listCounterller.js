import { User } from "../Models/user-model.js";
import { List } from "../Models/list-model.js";
import mongoose from "mongoose";

export const addTask = async (req, res) => {
  try {
    const { title, body, id } = req.body;
    const userExists = await User.findById(id);
    console.log("addfunction 0");
    if (userExists) {
      const list = new List({ title, body, user: userExists._id });
      const savedList = await list.save();
       
      if (!Array.isArray(userExists.lists)) {
        userExists.lists = [];
      }

      userExists.lists.push(savedList._id);
        const data=  await userExists.save();
        console.log("addTask function");
        // console.log(data);
      // console.log(savedList);
        return res.status(200).json({ list: savedList });
                   // return res.status(200).json();
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const updateTask= async (req,res) => {
  try {
    
    const {title,body}=req.body; 
    const listId = req.params.id
    console.log(listId);
    // // console.log(id);
    // const userExists= await User.findOne(listId)
    // if(!userExists){
    //   return res.status(404).json({message:"user not exist"})  
    // }
    console.log("updatetask function");
    const updatedTask =  await List.findByIdAndUpdate({_id:listId},{title,body},{new:true})
 const  result= await updatedTask.save();
    console.log(result);
    console.log("updated task function");
      console.log(updateTask);
    return res.status(200).json({message:"task updated"})

  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"internal server error"})
  }
}

export const deleteTask= async(req,res)=>{
  try {
    const {id}=req.params;
      if(id==""){
        return res.status(200).json({message:"no task is there"})
      }
     console.log(id); 
     if(!mongoose.Types.ObjectId.isValid(id)) 
     { return res.status(400).json({ message: 'Invalid task ID' });}
 
    const resonde= await List.deleteOne({_id:id})
    console.log(resonde);

    return res.status(200).json({message:"Task deleted"})

  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"internal server error"})
  }
}