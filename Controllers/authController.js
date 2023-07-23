import express from "express";
import users from "../Models/users.js";
import  { comparePassword, hashedpassword } from "../Helpers/authHelper.js";
import jwt from "jsonwebtoken";

export  const registercontroller=  async(req,res)=>{

    try {
        const {name,email,mobile,password}=req.body
         //validtaion

        if(!name || !email||!password||!mobile){
            return res.send({
                message:"please fill all fields"
            })
        }
        //check existing users
        const existUser=await users.findOne({email});
        //hashed password
        const hashed=await hashedpassword(password)
        if(!existUser){
            const newUser= await new users({name,email,mobile,password:hashed}).save();

            res.status(201).send({
                sucess:false,
                message:"User registered succesfuly",
              newUser

            })
        }
        else{
            return res.status(200).send({
                sucess:true,
                message:"User already exists"
            })
        }

        
    } catch (error) {
        res.status(500).send({
            message:"error in registration",
            error
        })
        
    }
}

//login
 export const loginController= async( req,res)=>{
    try {
        const{email,password}=req.body;
        if(!email||!password){

            return res.status(400).send({
                sucess:false,
                message:"something is wrong"
            })
        }
    else{
        const user=await users.findOne({email})
        if(user){
            const match=await comparePassword(password,user.password)
            if(!match){
                return res.status(200).send({
                    sucess:false,
                    message:"invalid credential"
                })
            }
            else{
                //TOKEN
                const token=await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn: '1d'})
                res.status(201).send({
                    sucess:true,
                    message:"login sucessfully",
                    user:{
                        _id:user._id,
                        name:user.name,
                        mobile:user.mobile,
                        role:user.role

                    },token
                })
            }
        }
        else{
            return res.status(404).send({
                sucess:false,
                message:"user not found"
            })
        }
        }

        
    } catch (error) {

        console.log(error)
        res.status(500).send({
            sucess:false,
            message:"error in login "
        })
        
    }


}

export const testcontroller=(req,res,)=>{
   res.send("protected")

}

