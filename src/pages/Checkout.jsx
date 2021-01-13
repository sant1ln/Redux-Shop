import React from "react";
import { Link } from "react-router-dom";
import Static from "../assets/default.png";
import "../styles/pages/checkout.css";

export const Checkout = () => {
  return (
    <div className="checkout-container">
        <ul className="checkout-list">
            <li>
                <img src={Static} alt="" />
                <div className="item_data">
                    <p>product</p>
                    <p>$345</p>
                </div>
                <i className="fas fa-times-circle cancel"></i>
            </li>
        </ul>
        <div className="checkout_confirm">
            <button className="pay">
             <Link to="/payment">Pay</Link>
             </button>
            <button className="cancel_buy">Cancel</button>
        </div>
    </div>
  );
};
