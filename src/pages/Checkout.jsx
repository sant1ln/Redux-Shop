import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Static from "../assets/default.png";
import "../styles/pages/checkout.css";

export const Checkout = () => {
  const { cart } = useSelector((state) => state.ui);

  return (
    <div className="checkout-container">
      <ul className="checkout-list">
        {cart.map((item) => (
          <li>
            <img src={Static} alt="" />
            <div className="item_data">
              <p>product</p>
              <p>$345</p>
            </div>
            <i className="fas fa-times-circle cancel"></i>
          </li>
        ))}
      </ul>
      <div className="checkout_confirm">
        <Link className="pay" to="/payment">
          Pay
        </Link>
        <button className="cancel_buy">Cancel</button>
      </div>
    </div>
  );
};
