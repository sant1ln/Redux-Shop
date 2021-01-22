import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cancelPurchase, removeToCart } from "../actions/uiActions";
import { NotProduct } from "../Components/NotProduct";
import "../styles/pages/checkout.css";

export const Checkout = () => {
  const { cart } = useSelector((state) => state.ui);

  const dispatch = useDispatch()
  
  let toPay = 0
  cart.map((data)=>(
    toPay += data.price
  ))
  
  const remove = (idCart) =>{
    dispatch(removeToCart(idCart))
  }

  const cancelAll = () =>{
    dispatch(cancelPurchase())
  }
  
  if(!cart.length){
    return(
      <NotProduct />
    )
  }


  return (
    <div className="checkout-container">
      <ul className="checkout-list">
        <h2>To pay: {toPay}</h2>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt="" />
            <div className="item_data">
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
            <i onClick={()=>remove(item.idCart)} className="fas fa-times-circle cancel"></i>
          </li>
        ))}
      </ul>
      <div className="checkout_confirm">
        <Link className="pay" to="/paymentinfo">
          Pay
        </Link>
        <button onClick={cancelAll} className="cancel_buy">Cancel</button>
      </div>
    </div>
  );
};
