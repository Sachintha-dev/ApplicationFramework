import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Home from "../src/Components/HomePage/Home";
import SideBar from "../src/Components/SideBar/SideBar";
import "./App.css";
import DietientHome from "./components/DietientPage/DietientHome";
import AdminBreakfastDietPlan from "./components/DietientPage/AdminBreakfastDietPlan";
import AdminViewBrekfastDiet from "./components/DietientPage/AdminViewBrekfastDiet";
import AdminCreateBrekfastDiet from "./components/DietientPage/AdminCreateBrekfastDiet";
import CricketerDietplanHome from "./components/CricketerDietplanHome";
import Chatbot from "./Components/ChatBot/Chatbot";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/" exact element={<DietientHome />} />
          <Route
            path="/breakfastDietPlan"
            exact
            element={<AdminBreakfastDietPlan />}
          />
          <Route
            path="/breakfastDietPlan/:playerID"
            exact
            element={<AdminViewBrekfastDiet />}
          />
          <Route
            path="/createNewDietPlan/:playerID/"
            exact
            element={<AdminCreateBrekfastDiet />}
          />

          <Route
            path="/cricketerDietPlan/:playerID/"
            exact
            element={<CricketerDietplanHome />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
