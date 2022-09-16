import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  return (
    <button className={`${classes.button} ${classes.animate}`}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>장바구니</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}
