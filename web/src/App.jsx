
import { Routes, Route, useNavigate,Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Auth from "./pages/Login/index";
import Register from "./pages/Register";
import { useAuth } from "./hooks/UseAuth";
import { useEffect } from "react";

function App() {
  
 
  const { authenticated } = useAuth();
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(authenticated){
      navigate("/")
    }


  },[authenticated])

 

  return (
    <div className="App">
      <ToastContainer
        autoClose={5000}
        theme="dark"
        position="bottom-right"
      />
      <Routes>
        <Route path="/" element={authenticated ? <Home /> : <Navigate to="/auth" />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;