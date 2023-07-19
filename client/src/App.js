import { BrowserRouter as Router, Switch,Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from './Pages/Login.js';
import Home from './Pages/Home.js';
import Register from './Pages/Register.js';
import Cart from './Pages/Cart.js';


function App() {
  return (
   <>
     <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart/>} />
       
      </Routes>
    </Router>
  
   </>
  );
}

export default App;
