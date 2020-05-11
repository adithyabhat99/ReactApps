import * as actions from "./actions";
import initialState from "./initialState";

function reducer(state = initialState, action) {
  if (action.type === actions.CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === actions.TOGGLE_AMOUNT) {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        let amount =
          action.payload.toggle === "inc" ? item.amount + 1 : item.amount - 1;
        item = { ...item, amount };
      }
      return item;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === actions.REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
  if (action.type === actions.GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, item) => {
        const { price, amount } = item;
        cartTotal.amount += amount;
        cartTotal.total += price * amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = total.toFixed(2);
    return { ...state, total, amount };
  }
  return state;
}

export default reducer;
