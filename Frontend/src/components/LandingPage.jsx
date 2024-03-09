import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to My Landing Page</h1>
      </header>
      <section>
        <p>This is a simple React landing page.</p>
        <p>Feel free to customize it according to your needs.</p>
      </section>
      <div className="buttons-container">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/registerngo">
          <button className="register-button">Register as NGO</button>
        </Link>
        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>
      </div>
      <footer>
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default LandingPage;
