import React from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

export default function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "스시", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>총 금액</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          닫기
        </button>
        <button className={classes.button}>주문하기</button>
      </div>
    </Modal>
  );
}
