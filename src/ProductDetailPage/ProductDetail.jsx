import React, { useEffect, useState } from "react";
import Axios from "axios";
import Products from "../Products/Products";
import { useContext } from "react";
import { ProductsContext } from "../Products/ProductsContext";
import { useParams } from "react-router-dom";
import { match } from "react-router-dom";
const ProductDetail = ({ props }) => {
  const { products } = useContext(ProductsContext);
  const { ProductId } = useParams();
  const product = products.find((p) => p._id === Number(ProductId));
  return (
    <div className="products-detail-container">
      <div className="products-base" key={ProductId}></div>
    </div>
  );
};

export default ProductDetail;
