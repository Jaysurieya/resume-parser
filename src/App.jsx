import React from "react"
import "./App.css";
import { Routes,Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signup  from "./components/Signup"
import Login from "./components/Login"

function App() {

  return (
    <div >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

