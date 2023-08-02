import React from "react";
import { useSelector } from "react-redux";
import CartEmpty from "../components/CartEmpty";

const Cart = () => {
  // This is the place where you tell what are you subscribing to
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  return cartItem.length === 0 ? (
    <CartEmpty />
  ) : (
    <div className="cart-wrapper">
      {cartItem.map((item) => (
        <div className="cart" key={item.id}>
          <img className="cart-img" src={item?.image} alt="product-Img" />
          <h4 className="cart-title">{item?.title}</h4>
          <h5 className="cart-price">${item?.price}</h5>
          <button className="cart-btn">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
