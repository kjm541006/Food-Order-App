import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Foods from "./components/Foods/Foods";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(true);
  }

  function hiddenCartHandler() {
    setCartIsShown(false);
  }

  return (
    <React.Fragment>
      {cartIsShown && <Cart onCloseCart={hiddenCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Foods />
      </main>
    </React.Fragment>
  );
}

export default App;
