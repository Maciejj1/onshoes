import React, { useContext } from "react";
import { ProductsContext } from "./ProductsContext";
const Products = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      <h1>Oferta</h1>
      <div className="products-base">
        {products.map((product) => (
          <div className="products-card" key={product.ProductId}>
            <div className="products-card-image">
              <img src={product.ProductImg} target="_blank" />
            </div>

            <div className="products-card-body">
              <div className="products-card-title">
                <h3>{product.ProductName}</h3>
              </div>
              <div className="products-card-links">
                <a href="/">Dodaj do koszyka</a>
                <a href="/">KUP TERAZ</a>
              </div>
              <div className="products-card-amount">
                <h5>{product.ProductAmount}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
