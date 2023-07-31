import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>REDUX STORE</h1>
      <div className="nav-items">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/cart">
          Cart
        </Link>
        <span className="cart-count">Cart Count: 0</span>
      </div>
    </div>
  );
};

export default Navbar;
