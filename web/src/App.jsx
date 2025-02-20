import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UseContext";

import Home from "./pages/Home";
import Auth from "./pages/Login/index";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
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
