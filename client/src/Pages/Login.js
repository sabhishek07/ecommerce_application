import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react';

const Login = () => {
    const[email,setEmail]=useState("");
    const[name,setName]=useState("");
    const[pass,setPass]=useState("");
  return (
    <div className='App'>
 <div className="auth-form-container">
            <h1>Login</h1>
        <form className="register-form" >
            <label htmlFor="name"><h4>Name</h4></label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn">Already have an account? Login here.</button>
    </div>
      
    </div>
  )
}

export default Login
