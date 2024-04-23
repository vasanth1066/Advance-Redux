import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./cartReducer";
import cartitemSlice from "./cartItemReducer";

const Store = configureStore({
  reducer: { cart: CartSlice.reducer, cartitem: cartitemSlice.reducer },
});

export default Store;
