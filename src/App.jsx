import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  return (
    <HashRouter>
     <Routes>
  <Route path="/" element={<Signup />} />
  <Route path="/signup" element={<Signup />} /> 
  <Route path="/login" element={<Login />} />
</Routes>
    </HashRouter>
  );
}

export default App;
