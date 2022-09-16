import React from "react";
import classes from "./FoodItem.module.css";

export default function FoodItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.food}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <form></form>
      </div>
    </li>
  );
}
