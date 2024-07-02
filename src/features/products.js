import { createSlice } from "@reduxjs/toolkit";

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
