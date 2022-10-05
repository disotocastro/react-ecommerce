import { useState } from "react";
const initialState = {
  cart: [],

}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,//mantener los elementos anteriores
      cart: [...state.cart, payload]
      // mantenga lo que tenia el state.cart y agregele el payload
    });
  };
  return {
    state, addToCart
  }
}

export default useInitialState