import { useState } from "react";

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      // ... sirve para mantener items anteriores
      cart: [...state.cart, payload]
    });
  };

  return {
    state,
    addToCart
  }
}

export default useInitialState;
