import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/uiActions";

import "../styles/components/product.css";
export const Product = ({ name, id, desc, img, price }) => {
  const dispatch = useDispatch();
  const actual = {
    id,
    name,
    desc,
    img,
    price,
  };
  const add = () => {
    let itemId = Math.floor(Math.random() * (500 - 100)) + 100
      
    dispatch(addToCart(actual,itemId));
  };
  const shortDesc = desc.substring(0, 50) + "(...)";
  return (
    <div className="product_container">
      <Link to={`/product/${id}`}>
        <img className="image_product" src={img} alt={name} />
      </Link>
      <div className="product_info">
        <div className="product_info_title">
          <h4>{name}</h4>
        </div>
        <div className="product_info_data">
          <div className="price">
            <span>${price}</span>
            <i onClick={add} className="fas fa-shopping-cart"></i>
          </div>
          {desc ? <p>{shortDesc}</p> : ""}
        </div>
      </div>
    </div>
  );
};
