import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartEmpty from "../components/CartEmpty";
import { MdDeleteOutline } from "react-icons/md";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  // This is the place where you tell what are you subscribing to
  const cartItem = useSelector((store) => store.cart.items);

  // clear cart
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  // remove item from the cart
  const removeItemHandler = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return cartItem.length === 0 ? (
    <CartEmpty />
  ) : (
    <div className="cart-wrapper">
      {cartItem.map((item) => (
        <div className="cart" key={item.id}>
          <img className="cart-img" src={item?.image} alt="product-Img" />
          <h4 className="cart-title">{item?.title}</h4>
          <h5 className="cart-price">${item?.price}</h5>
          <button
            onClick={() => removeItemHandler(item.id)}
            className="cart-btn"
          >
            Remove
          </button>
        </div>
      ))}
      <button onClick={clearCartHandler} className="clear-cart-btn">
        <MdDeleteOutline size={18} />
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
