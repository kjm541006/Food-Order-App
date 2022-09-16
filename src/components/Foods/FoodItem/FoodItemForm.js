import React from "react";
import Input from "../../UI/Input";
import classes from "./FoodItemForm.module.css";

export default function FoodItemForm(props) {
  return (
    <form className={classes.form}>
      <Input
        label="수량"
        input={{ id: "amount", type: "number", min: "1", max: "5", step: "1", defaultValue: "1" }}
      />
      <button>추가</button>
    </form>
  );
}
