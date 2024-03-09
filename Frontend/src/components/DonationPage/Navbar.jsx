import React from "react";
// import { FiHeart, AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/all"; // Make sure to import the icons you're using
import "./Navbar.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
       
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      {/* <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div> */}
    </nav>
  );
};

export default Nav;
