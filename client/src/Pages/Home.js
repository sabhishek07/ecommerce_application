import React from 'react'
import Navbar from '../Components/Navbar'
import { useAuth } from '../context/auth'

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
