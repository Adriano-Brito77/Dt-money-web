
import { Routes, Route, useNavigate,Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Auth from "./pages/Login/index";
import Register from "./pages/Register";
import ForgotPassword from "./pages/Forgot-Password";


import { useAuth } from "./hooks/UseAuth";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function App() {
  
 
  const [auth, setAuth] = useState(false)
  const {authenticated} = useAuth()
  const navigate = useNavigate()
  
  useEffect(()=>{
    const token =  Cookies.get("access_token")
    if(token){
      navigate("/")
      setAuth(true)
    }
    

  },[authenticated,navigate])
  
 

  return (
    <div className="App">
      <ToastContainer
        autoClose={5000}
        theme="dark"
        position="bottom-right"
      />
      <Routes>
        <Route path="/" element={auth ? <Home /> : <Navigate to="/auth"/> } />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
      </Routes>
    </div>
  );
}

export default App;