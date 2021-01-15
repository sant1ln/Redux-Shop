import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/pages/checkout.css";

export const Checkout = () => {
  const { cart } = useSelector((state) => state.ui);

  return (
    <div className="checkout-container">
      <ul className="checkout-list">
        {cart.map((item) => (
          <li>
            <img src={item.img} alt="" />
            <div className="item_data">
              <p>{item.name}</p>
              <p>${item.price}</p>
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
