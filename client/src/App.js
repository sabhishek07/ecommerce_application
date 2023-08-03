import { BrowserRouter as Router, Switch,Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from './Pages/Login.js';
import Home from './Pages/Home.js';
import Register from './Pages/Register.js';
import Cart from './Pages/Cart.js';
import Navbar from './Components/Navbar.js';
import toast, { Toaster } from 'react-hot-toast';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>

      </Routes>
      <Toaster />
   </div>
  );
}

export default App;
