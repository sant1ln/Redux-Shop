import React from "react";
import { Link } from "react-router-dom";
import { useCheckForm } from "../hooks/useCheckForm";
import { useFrom } from "../hooks/useFrom";
import "../styles/pages/payment.css";

export const Payment = () => {
  

  const [formState, handleInputChange] = useFrom();
  const { name, lastName, email, phone, ID, addres} = formState;
  const [check,checkInput] = useCheckForm()
  const { nameOk, lastNameOk, emailOk, phoneOk,IdOk, addresOk} = check

  return (
    <div className="payment_container">
      <h2>Enter your shipping information</h2>
      <form className="payment_contianer_form">
        <div className="form_data">
          <label htmlFor="name">
            <p>Name</p>
            <input
              className={`payment_input ${nameOk}`}
              onChange={handleInputChange}
              onBlur={checkInput}
              value={name}
              type="text"
              name="name"
              id="name"
              title="Must be longer than 2 characters"
            />
          </label>
          <label htmlFor="lastName">
            <p>LastName</p>
            <input
              className={`payment_input ${lastNameOk}`}
              onChange={handleInputChange}
              onBlur={checkInput}
              value={lastName}
              type="text"
              name="lastName"
              id="lastName"
              title="Must be longer than 2 characters"
            />
          </label>
        </div>
        <div className="form_data">
          <label htmlFor="email">
            <p>Email</p>
            <input
               className={`payment_input ${emailOk}`}
              onChange={handleInputChange}
              onBlur={checkInput}
              value={email}
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="phone">
            <p>Phone</p>
            <input
               className={`payment_input ${phoneOk}`}
              onChange={handleInputChange}
              onBlur={checkInput}
              value={phone}
              type="tel"
              name="phone"
              id="phone"
            />
          </label>
          <label htmlFor="ID">
            <p>ID</p>
            <input
              className={`payment_input ${IdOk}`}
              onChange={handleInputChange}
              onBlur={checkInput}
              value={ID}
              type="number"
              name="ID"
              id="ID"
            />
          </label>
          <label htmlFor="addres">
            <p>Addres</p>
            <input
               className={`payment_input ${addresOk}`}
              onChange={handleInputChange}
              onBlur={checkInput}
              value={addres}
              type="text"
              name="addres"
              id="addres"
            />
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
