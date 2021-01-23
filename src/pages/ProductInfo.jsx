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
    let itemId = Math.floor(Math.random() * (500 - 100)) + 100
    dispatch(addToCart(product,itemId))
  }
  
  return (
    <div className="productInfo_container">
      <div className="productInfo_container-divisor" >
        <img src={img} alt="react_img" />
        <div className="productInfo_data">
          <div className="productInfo_data-title">
            <h2>{name}</h2>
            <p className="productInfo_data-price">${price}</p>
          </div>
          <p className="productInfo_data-description">{description}</p>
          
        </div>
      </div>
      <div className="productInfo_buttons">
        <button onClick={add} className="add">Add to cart <i className="fas fa-shopping-cart"></i></button>
        <Link to="/checkout" onClick={add} className="pay_info_button">Pay</Link>
      </div>
    </div>
  );
};
