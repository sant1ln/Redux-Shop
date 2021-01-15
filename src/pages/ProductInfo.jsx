import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../actions/uiActions";
import { useData } from "../hooks/useData";

import "../styles/pages/product_info.css";
export const ProductInfo = () => {
  const {getProductsById} = useData()
  const {id} = useParams()
  const idProduct = parseInt(id)
  const product = getProductsById(idProduct)

  const dispatch = useDispatch()

  const add = () =>{
    dispatch(addToCart(product))
}
  
  return (
    <div className="productInfo_container">
      <img src={product[0].img} alt="react_img" />
      <div className="productInfo_data">
        <div className="productInfo_data-title">
          <h2>{product[0].name}</h2>
        </div>
        <p className="productInfo_data-description">{product[0].description}</p>
        <p className="productInfo_data-price">${product[0].price}</p>
      </div>
      <div className="productInfo_buttons">
        <button onClick={add} className="add">Add to cart <i className="fas fa-shopping-cart"></i></button>
        <button className="pay">Pay</button>
      </div>
    </div>
  );
};
