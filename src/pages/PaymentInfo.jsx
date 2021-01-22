import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { cancelPurchase } from '../actions/uiActions';
import { addUser } from '../actions/userActions';
/* import { Link } from "react-router-dom"; */
import { useCheckForm } from "../hooks/useCheckForm";
import { useFrom } from "../hooks/useFrom";

import "../styles/pages/payment_info.css";

export const PaymentInfo = () => {
  const [formState, handleInputChange,setFormState] = useFrom();
  const { name, lastName, email, ID, addres} = formState;
  const [check,checkInput] = useCheckForm()
  const { nameOk, lastNameOk, emailOk, IdOk, addresOk,completed} = check
  const dispatch = useDispatch()
  const history = useHistory()

  const addUserInfo = (e) =>{
    e.preventDefault()
    dispatch(addUser(formState))
    setFormState({})
    history.push('/payment')
  }

  const cancelBuy = () =>{
    dispatch(cancelPurchase())
  }

  let isCorrect= ''

  if(completed > 4){
    console.log('x');
    isCorrect= true
  }else{
    isCorrect = false
  }


  return (
    <div className="payment_container">
      <h2>Enter your shipping information</h2>
      <form className="payment_contianer_form" onSubmit={addUserInfo}>
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
          {(isCorrect)
            ?<button type="submit" onClick={addUserInfo} className="pay">Pay</button>
            :<button type="button" className="pay_block">Pay</button>
          }
          <button onClick={cancelBuy}  className="cancel_buy">Cancel</button>
        </div>
      </form>
    </div>
  );
}
