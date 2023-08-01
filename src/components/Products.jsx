import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // call fetch Product function
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    setProducts(data);
  }

  return !products ? (
    <Shimmer />
  ) : (
    <div className="product-wrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img className="product-img" src={product?.image} alt="product-Img" />
          <h4 className="product-title">{product?.title}</h4>
          <h5 className="price">${product?.price}</h5>
          <button className="product-btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
