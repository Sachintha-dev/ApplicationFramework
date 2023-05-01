import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from 'react'
import React from "react";
import Home from "../src/Components/HomePage/Home";
import SideBar from "../src/Components/SideBar/SideBar";
import Chatbot from "../src/Components/ChatBot/Chatbot";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
