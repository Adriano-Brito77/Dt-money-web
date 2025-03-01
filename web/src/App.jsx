import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UseContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Auth from "./pages/Login/index";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
        <ToastContainer autoClose={5000} theme="dark"/>
          <Routes>
            
          <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            
            <Route path="/Register" element={<Register />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
