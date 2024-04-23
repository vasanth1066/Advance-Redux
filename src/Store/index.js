import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./cartReducer";

const Store = configureStore({
  reducer: { cart: CartSlice.reducer },
});

export default Store;
