import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/components/navbar.css";

export const Navbar = ({ children }) => {

  const {cart} = useSelector(state => state.ui)
  

  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar_title">
          <h1>
            Redux
            <br />
            <span>Shop</span>
          </h1>
        </a>
        <form className="navbar_">
          <input type="Busca algo!" />
        </form>
        <div className="navbar_buttons">
          <Link to="/checkout">
            <div className="counter">{cart.length}</div>
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <i className="fas fa-user"></i>
        </div>
      </nav>
      {children}
    </>
  );
};
