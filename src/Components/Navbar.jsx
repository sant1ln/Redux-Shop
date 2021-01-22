import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { reset, searchProduct } from "../actions/uiActions";
import "../styles/components/navbar.css";

export const Navbar = ({ children }) => {

  const {cart} = useSelector(state => state.ui)
  const dispatch = useDispatch()
  const [search, setsearch] = useState('')


  const handleInput = (e) =>{
    setsearch(e.target.value)
  }

  const searchItems = (e) =>{
    e.preventDefault()
    dispatch(searchProduct(search))
    setsearch('')
  }

  const resetSearch = () =>{
    dispatch(reset())
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" onClick={resetSearch} className="navbar_title">
          <h1>
            Redux
            <br />
            <span>Shop</span>
          </h1>
        </Link>
        <form className="navbar_search" onSubmit={searchItems}>
          <input type="Busca algo!" onChange={handleInput} value={search} />
        </form>
        <div className="navbar_buttons">
          <Link className="navbar_cart_count" to="/checkout">
            <div className="counter">{cart.length}</div>
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </div>
      </nav>
      {children}
    </>
  );
};
