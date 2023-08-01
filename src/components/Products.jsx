import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // call fetch Product function
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  }

  const dispatch = useDispatch();

  // Dispatch an action
  const addProduct = (product) => {
    dispatch(addItem(product));
  };

  return !products ? (
    <Shimmer />
  ) : (
    <div className="product-wrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img className="product-img" src={product?.image} alt="product-Img" />
          <h4 className="product-title">{product?.title}</h4>
          <h5 className="price">${product?.price}</h5>
          <button onClick={() => addProduct(product)} className="product-btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
