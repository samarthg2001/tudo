import { List } from "../Models/list-model.js";
import { User } from "../Models/user-model.js";
import bcrypt from 'bcrypt'
import express from 'express'; 
import mongoose from 'mongoose'

//SIGN UP
export const create = async (req,res)=>{
    try {
        const {name,password,email} =req.body;
        if(!name||!password||!email){
           return  res.status(400).json({message:'All required fields must be provided '})
        }
        const userExists = await User.findOne({ email });
        if(userExists){
            return  res.status(400).json({message:'user already exists'})
        }        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser= new User({name,password:hashedPassword,email})
        const savedUser=await newUser.save();
        res.status(201).json(savedUser)
        // console.log('user created',savedUser);

    } catch (error) {
         res.status(500).json({message:'internal server error'})
        console.log(error);
    }

}




export const fetchbyId=async (req,res)=>{    
    try {
        console.log("this is fetch by id method backend");
        const listId = req.params.id
    if(!mongoose.Types.ObjectId.isValid(listId)) 
    { return res.status(400).json({ message: 'Invalid list ID' }); }
        const list= await List.find({user:listId})
        console.log("this is fetch by id method");
        // console.log(list);
        try {
            if(list.length!== 0){
                // console.log(list);
                res.status(200).json(list)
            }
            else{
                // console.log(list);
                res.status(200).json({message:"no task"})
            }
                
        } catch (error) {
            res.status(200).json(error)
 
        }

    } catch (error) {
        res.status(400).json(error)
        console.log("fetch by id method error :",error);
    }

}




export const signIn= async(req,res)=>{

    try {
        const {email,password}=req.body;
        if(!password||!email){
            return  res.status(400).json({message:'All required fields must be provided '})
         }
            const signuser=await User.findOne({email})
            if(!signuser){
                res.status(400).json({message:"please log in "})
            }
            const isPasswordCorrect= await bcrypt.compare(
                password,
                signuser.password
            )
            console.log(isPasswordCorrect);

            if(!isPasswordCorrect){
                return res.status(400).json({ message: "Incorrect password, please try again." });
                // res.status(400).json({message:"please enter correct password"})
            }
            const {password:userPassword ,...other}=signuser._doc;
            // console.log(other);
            res.status(200).json(other) 


    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error"})
    }
}


// API endpoints for fetching user data
export const fetchbyemail=async(req,res)=>{
    try {
        const userData= await User.findOne(req.params.email)
        if(!userData){
                return    res.status(400).json({message:"user does not exist"})
        }
        return res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({message:"internal server error"})
        console.log(error);
    }
}
export const fetchAllData= async (req,res)=>{
    try {
    const allData= await User.find();
    if(!allData){
        res.status(404).json({message:"fetch all method got error "})
    }        
    res.status(200).json(allData)

    } catch (error) {
        console.log(error);
        res.status(501).json({message:"internal server error"})
    }
}