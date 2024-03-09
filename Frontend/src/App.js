import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import RegisterPage from "./components/Signup/RegisterPage";
import LoginPage from "./components/Login/LoginPage";
import DonationPage from "./components/DonationPg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/donation" element={<DonationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
