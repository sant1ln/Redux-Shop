import React from "react";
import Static from "../assets/default.png";

import "../styles/pages/product_info.css";
export const ProductInfo = () => {
  return (
    <div className="productInfo_container">
      <img src={Static} alt="react_img" />
      <div className="productInfo_data">
        <div className="productInfo_data-title">
          <h2>Product Title</h2>
          <i className="fas fa-shopping-cart"></i>
        </div>
        <p className="productInfo_data-description">Description</p>
        <p className="productInfo_data-price">$500</p>
      </div>
    </div>
  );
};
