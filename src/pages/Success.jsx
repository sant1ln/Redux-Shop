import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleView } from "../actions/uiActions";
import { endAllProcess } from "../actions/userActions";
import { CheckoutBasic } from "../Components/CheckoutBasic";
import "../styles/pages/success.css";
export const Success = () => {
  const { orders, userInfo } = useSelector((state) => state.user);
  const { showRecap } = useSelector((state) => state.ui);
  const { name, lastName, email, addres } = userInfo;
  const history = useHistory()
  const dispatch = useDispatch();

  const toggleRecap = () => {
    dispatch(toggleView());
  };

  const endProcess = () => {
      dispatch(endAllProcess())
      history.replace('/')
  }

  return (
    <div className="success_container">
      <div className="shop_container_success">
        <h2>Payment Successfully!</h2>
        <h4>Thanks for your purchase</h4>
      </div>

      <h2>Deliver to:</h2>
      <div className="success_helper">
        <div className="shop_container_user">
        <div className="shop_container_user_item">
          <h3>Name</h3>
          <h4>{name + " " + lastName} </h4>
        </div>
        <hr />
        <div className="shop_container_user_item">
          <h3>Email</h3>
          <h4>{email}</h4>
        </div>
        <hr />
        <div className="shop_container_user_item">
          <h3>Addres</h3>
          <h4>{addres}</h4>
        </div>
      </div>
      <div className="order_recap">
        <div onClick={toggleRecap} className="order_recap-toggle">
          {showRecap ? "Hide buy" : "Show buy"}
          <i
            className={showRecap ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          ></i>
        </div>
        <div
          className={showRecap ? "order_reacp_items" : "order_reacp_items-hide"}
        >
          <div className="order_checkout_basic_container">
            {orders.map(({ idCart, name, price }) => (
              <CheckoutBasic key={idCart} name={name} price={price} />
            ))}
          </div>
        </div>
      </div>
      <div className="success_button" onClick={endProcess}>
          <button>End Process</button>
      </div>
      </div>
    </div>
  );
};
