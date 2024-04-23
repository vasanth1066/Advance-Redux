import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { isCartVisisble: false };

const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toogle(state) {
      state.isCartVisisble = !state.isCartVisisble;
    },
  },
});

export const CartAction = CartSlice.actions;

export default CartSlice;
