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
import Login from "./Components/Login/Login";
import LoginPage from "./Components/Login page/LoginPage";
import RegistrationForm from "./Components/RegitrationForm/RegistrationForm";
import UserDetailCard from "./Components/UserDetailsCard/UserDetailsCard";
import AlluserAdminLayout from "./Components/Layout/AdminLayout";
import UserDetailspage from "./Components/Pages/UserDetailspage";
import UserTable from "./Components/UserTable/UserTable";
import UseerList from "./Components/Pages/UserList";

function App() {
  return (
    <div>
      <UseerList />
    </div>
  );
}
export default App;
