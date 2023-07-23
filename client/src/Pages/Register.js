import React from 'react'
import Navbar from '../Components/Navbar'
import {  toast } from 'react-toastify';
import { useState } from 'react';
import './Register.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const[email,setEmail]=useState("");
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[mobile,setMobile]=useState("");
    const [state,Setstate]=useState("");
    const navigate = useNavigate()

   const handlesubmit= async(e)=>{
    e.preventDefault()
   try{
    const res=await axios.post("/api/v1/auth/register",{name,email,password,mobile})
    if(res.data.success){
      toast.success(res.data.message)
      navigate('/login')

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
            <h2>Register</h2>
        <form className="register-form" onSubmit={handlesubmit} >
            <label htmlFor="name">Full name</label>
            <input value={name} required  name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} required onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={mobile} required onChange={(e) => setMobile(e.target.value)}type="tel" placeholder="Mobile no." id="email" name="email" />
            <label htmlFor="password">Mobile</label>
           
            <input value={password} required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button >Register</button>
        </form>
        <button className="link-btn">Already have an account? Login here.</button>
    </div>
  
      
    </div>
  )
}

export default Register
