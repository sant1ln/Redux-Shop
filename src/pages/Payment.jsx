import React from "react";
import { Link } from "react-router-dom";
import '../styles/pages/payment.css'


export const Payment = () => {
  return (
    <div className="payment_container">
        <h2>Enter your shipping information</h2>
      <form className="payment_contianer_form">
        <div className="form_data">
          <label htmlFor="name">
            <p>Name</p>
            <input className="payment_input bad" type="text" name="name" id="name" />
          </label>
          <label htmlFor="lastName">
            <p>LastName</p>
            <input className="payment_input good" type="text" name="lastName" id="lastName" />
          </label>
        </div>
        <div className="form_data">
          <label htmlFor="email">
            <p>Email</p>
            <input className="payment_input"  type="email" name="email" id="email" />
          </label>
          <label htmlFor="phone">
            <p>Phone</p>
            <input className="payment_input" type="number" name="phone" id="phone" />
          </label>
          <label htmlFor="addres">
            <p>Addres</p>
            <input className="payment_input" type="text" name="addres" id="addres" />
          </label>
        </div>
        <div className="payment_confirm">
            <Link className="pay" to="/payment">
                Pay
            </Link>
            <button className="cancel_buy">Cancel</button>
        </div>
      </form>
    </div>
  );
};
