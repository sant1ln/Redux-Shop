import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {cancelPurchase, emptyCart, toggleView } from "../actions/uiActions";
import { addNewOrder } from "../actions/userActions";
import { CheckoutBasic } from "../Components/CheckoutBasic";
import "../styles/pages/payment.css";

export const Payment = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {cart,showRecap} = useSelector(state => state.ui)
  const {userInfo} = useSelector(state => state.user)
  
  let toPay = 0
  cart.map((data)=>toPay += data.price)
  toPay = toPay.toFixed(2)
  const toggleRecap = () =>{
    dispatch(toggleView())
  }

  const newOrder = () =>{
    dispatch(addNewOrder(cart))
    dispatch(emptyCart())
    history.push('/success')
  }

  const cancelBuy = () =>{
    dispatch(cancelPurchase())
    history.push('/')
  }
  
  return (
    <div className="pay_container">
      <h2>Payment</h2>
      <div className="payment_helper">
        <div className="pay_info">
          <div className="pay_info_item">
            <h3>Total to pay</h3>
            <h2>${toPay}</h2>
            
          </div>
          <hr/>
          <div className="pay_info_item">
              <h3>Name</h3>
              <h4>{userInfo.name}</h4>
          </div>
          <hr/>
          <div className="pay_info_item">
            <h3>Email</h3>
            <h4>{userInfo.email}</h4>
          </div>
          <div className="pay_info_item">
            <h3>Addres</h3>
            <h4>{userInfo.addres}</h4>
          </div>
        </div>
        <div className="payment_recap">
        <div onClick={toggleRecap} className="payment_recap-toggle">
          {(showRecap)?'Hide buy':'Show buy'}
          <i className={(showRecap) ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
        </div>
        <div className={(showRecap) ?"payment_reacp_items" : "payment_reacp_items-hide"}>
          <div className="checkout_basic_container">
            {
              cart.map(({idCart,name,price}) => (
                <CheckoutBasic 
                  key={idCart}
                  name={name}
                  price={price}              
                />

              ))
            }
          </div>
        </div>
      </div>
      <div className="pay_buttons">
        <button onClick={newOrder} type="button" className="pay_end">
          Pay
        </button>
        <button onClick={cancelBuy} className="cancel_buy">Cancel</button>
      </div>
      </div>
    </div>
  );
};
