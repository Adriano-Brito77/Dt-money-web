import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "./context/UseContext";


import Home from "./pages/Home";
import Auth from "./pages/Login/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
