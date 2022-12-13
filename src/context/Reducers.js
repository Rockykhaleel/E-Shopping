export const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "Remove_From_Cart":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id
            ? (c.quantity = action.payload.quantity)
            : c.quantity
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "Sort_By_Mobile":
      return { ...state, mobile: !state.mobile };
    case "Sort_By_Laptop":
      return { ...state, laptop: !state.laptop };
    case "Sort_By_Pad":
      return { ...state, pad: !state.pad };

    default:
      return state;
  }
};
