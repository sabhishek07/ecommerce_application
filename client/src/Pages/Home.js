import React from 'react'
import Navbar from '../Components/Navbar.js'
import { useAuth } from '../context/auth.js'

const Home = () => {
  const [auth,setAuth]=useAuth();
  return (
   <>
    Home
    <pre>{JSON.stringify(auth,null,4)}</pre>
      

      
   </>
  )
}

export default Home
