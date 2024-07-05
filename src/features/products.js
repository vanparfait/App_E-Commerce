import { createSlice } from "@reduxjs/toolkit";
import { createCartItem, deleteFromCart } from "./cart";

const initialState = {
  items: undefined,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.items = action.payload;
    },
  },
  // extraReducers: {
  //   ["cart/createCartItem"]: (state, action) => {
  //     state.items.find((item) => item.id === action.payload.id).picked = true;
  //   },
  //   ["cart/deleteFromCart"]: (state, action) => {
  //     state.items.find((item) => item.id === action.payload).picked = false;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(createCartItem, (state, action) => {
        const item = state.items.find((item) => item.id === action.payload.id);
        if (item) {
          item.picked = true;
        }
      })
      .addCase(deleteFromCart, (state, action) => {
        const item = state.items.find((item) => item.id === action.payload);
        if (item) {
          item.picked = false;
        }
      });
  },
});

export function getProductsList(action) {
  return function (dispatch, getState) {
    fetch("/data/inventory.json")
      .then((response) => response.json())
      .then((data) => dispatch(addProducts(data.products)));
  };
}

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
