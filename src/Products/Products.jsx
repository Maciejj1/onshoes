import React, { useContext, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import { generatePath } from "react-router-dom";
import "./Products.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-slideshow-image";
import { CartContext } from "../Cart/CartContext";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  const history = useNavigate();
  const [ProductId, setProductId] = useState();
  const notify = () => toast("Produkt dodany do koszyka!");
  const handleProceed = (e) => {
    ProductId && history(generatePath("/:id", { ProductId }));
  };
  return (
    <div className="products-container">
      <h1>Oferta</h1>
      <div className="products-base">
        {products.map((product, i) => (
          <div className="products-card" key={product.ProductId}>
            <div className="products-card-image">
              <input
                type="checkbox"
                key={i}
                onClick={(e) => {
                  setProductId(product.ProductId);
                }}
              ></input>
              <Link to="/:id">
                <img src={product.ProductImg} target="_blank" />
              </Link>
            </div>
            <div className="product-details">
              <button onClick={handleProceed}>hiii</button>
            </div>
            <div className="products-card-body">
              <div className="products-card-title">
                <h2>{product.ProductName}</h2>
              </div>
              <div className="products-card-links">
                <br />
                <br />
                <br />
                <button
                  className="'add-to-cart"
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      id: product.ProductId,
                      product,
                    })
                  }
                >
                  Dodaj do koszyka
                </button>
              </div>
              <div className="products-card-amount">
                <h5>{product.ProductAmount} PLN</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
