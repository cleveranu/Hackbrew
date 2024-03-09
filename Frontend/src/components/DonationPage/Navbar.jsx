import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div>EaseHub</div>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
