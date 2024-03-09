import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Main from './components/DonationPage/main'; // Corrected import

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from './components/DonationPage/Navbar'; // Import Navbar




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/product"
            element={
              <Main/>}
            
          >
          
            {/* Add more nested routes for /product if needed */}
          </Route>
        </Routes>
   
      </div>
    </Router>
  );
}

export default App;
