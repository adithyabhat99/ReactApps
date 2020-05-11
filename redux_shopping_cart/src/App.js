import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// redux stuff
import reducer from "./redux/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

// items
// import cartItems from "./cart-items";
// const initialState = {
//   cart: cartItems,
//   total: 0,
//   amount: 0,
// };

const store = createStore(reducer);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
