import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Navbar = () => {
  const cartItem = useSelector((store) => store.cart.items);

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
        <span className="cart-count">Cart Count: {cartItem.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
