import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import foodImg from "../../assets/foods.jpg";

export default function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>요기용?</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={foodImg} alt="메인화면 배경 이미지" />
      </div>
    </>
  );
}
