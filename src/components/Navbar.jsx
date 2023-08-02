import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = () => {
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className="navbar">
      <Link className="navbar-logo" to="/">
        Ebuy
        <BsFillCartCheckFill />
      </Link>
      <div className="nav-items">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/cart">
          Cart
        </Link>
        <span className="cart-count">
          Cart Count:{" "}
          <span className={cartItem.length ? "count-number" : "count-none"}>
            {cartItem.length}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
