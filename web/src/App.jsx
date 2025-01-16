import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "./context/UseContext";


import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
