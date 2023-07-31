import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="home-heading">Welcome To My Redux Store</h2>
      <section>
        <Products />
      </section>
    </div>
  );
};

export default Home;
