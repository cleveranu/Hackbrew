import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import RegisterPage from "./components/Signup/RegisterPage";
import LoginPage from "./components/Login/LoginPage";
import Main from "./components/DonationPage/main";

import "./App.css";

import Navbar from "./components/DonationPage/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<Main />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
