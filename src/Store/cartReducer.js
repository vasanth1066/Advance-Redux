import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { isCartVisisble: false, notification: null };

const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toogle(state) {
      state.isCartVisisble = !state.isCartVisisble;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const CartAction = CartSlice.actions;

export default CartSlice;
