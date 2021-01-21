import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../actions/uiActions";
import { useData } from "../hooks/useData";

import "../styles/pages/product_info.css";
export const ProductInfo = () => {
  const {getProductsById} = useData()
  const {id} = useParams()
  const idProduct = parseInt(id)
  const [product] = getProductsById(idProduct)
  
  const dispatch = useDispatch()
  const {img,name,description,price} = product
  const add = () =>{
    dispatch(addToCart(product))
  }
  
  return (
    <div className="productInfo_container">
      <img src={img} alt="react_img" />
      <div className="productInfo_data">
        <div className="productInfo_data-title">
          <h2>{name}</h2>
        </div>
        <p className="productInfo_data-description">{description}</p>
        <p className="productInfo_data-price">${price}</p>
      </div>
      <div className="productInfo_buttons">
        <button onClick={add} className="add">Add to cart <i className="fas fa-shopping-cart"></i></button>
        <Link to="/checkout" className="pay">Pay</Link>
      </div>
    </div>
  );
};
