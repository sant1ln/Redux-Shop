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

  
  const cancelBuy = () =>{
    dispatch(cancelPurchase())
    history.push('/')
  }
  
  let isCorrect= ''
  
  if(completed > 4){
    isCorrect= true
  }else{
    isCorrect = false
  }
  
  const addUserInfo = (e) =>{
    e.preventDefault()
    if(isCorrect){
      dispatch(addUser(formState))
      setFormState({})
      history.push('/payment')
    }else{
      alert('Fild all inputs')
    }
  }

  return (
    <div className="payment_container">
      <h2>Enter your shipping information</h2>
      <form className="payment_contianer_form" onSubmit={addUserInfo}>
      <div className="form_helper">
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
      </div>
      <div className="payment_confirm">
          {(isCorrect)
            ?<button type="submit" onClick={addUserInfo} className="pay">Pay</button>
            :<button type="button" className="pay_block">Pay</button>
          }
          <button onClick={cancelBuy} type="button"  className="cancel_buy">Cancel</button>
          <div className="container_user">
            <h2>Deliver to:</h2>
            <div>
              <h3>{name}</h3>
              <h3>{lastName}</h3>
              <h3>{email}</h3>
              <h3>{ID}</h3>
              <h3>{addres}</h3>
            </div>
          </div>
        
        </div>
      </form>
    </div>
  );
}
