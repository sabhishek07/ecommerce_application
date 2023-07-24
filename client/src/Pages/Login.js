import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react';
import {  toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate();

    const handlesubmit= async(e)=>{
      e.preventDefault()
     try{
      const res=await axios.post("/api/v1/auth/login",{email,password})
      if(res.data.success){
        toast.success(res.data.message)
        navigate("/")
  
      }
      else{
        toast.error(res.data.message)
      }
     }
     catch(error){
  
     }
      
      
     }
  return (
    <div className='App'>
 <div className="auth-form-container">
            <h1>Login</h1>
        <form className="register-form" onSubmit={handlesubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">LOGIN</button>
        </form>
        <button className="link-btn"></button>
    </div>
      
    </div>
  )
}

export default Login
