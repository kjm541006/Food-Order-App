import React from "react";
import Header from "./components/Layout/Header";
import Foods from "./components/Foods/Foods";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Foods />
      </main>
    </React.Fragment>
  );
}

export default App;
