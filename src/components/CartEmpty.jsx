import React from "react";
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";

const CartEmpty = () => {
  return (
    <div className="empty-cart">
      <img src="/shoppingCart.svg" alt="Shopping Cart" />
      <h1>Your cart is currently empty</h1>
      <p>
        Before proceed to checkout, you must add some products to your cart. You
        will find a lot of interesting products on our "Shop" page.
      </p>
      <Link to="/" className="empty-cart-btn">
        <IoCart size={20} />
        RETURN TO SHOP
      </Link>
    </div>
  );
};

export default CartEmpty;
