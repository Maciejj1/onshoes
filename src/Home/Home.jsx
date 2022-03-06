import React from "react";
import Nav from "../NavBar/Nav";
import ProductPlacement from "../ProdcutPlacement/ProductPlacement";
import Products from "../Products/Products";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home-container">
      <div className="Nav">
        <Nav />
      </div>
      <div className="home-base">
        <div className="home-product-placement"></div>
        <ProductPlacement />
        <div className="home-offer">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
