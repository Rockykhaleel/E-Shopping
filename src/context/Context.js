import { createContext, useContext, useReducer } from "react";
import { products } from "../products";
import { cartReducer, productReducer } from "./Reducers";

const cart = createContext();
const Context = ({ children }) => {
  const product = products;
  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    mobile: false,
    laptop: false,
    pad: false,
  });
  return (
    <cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(cart);
};
