import { createSlice } from "@reduxjs/toolkit";

const initialItemState = { items: [], totalQuantity: 0 };

const cartitemSlice = createSlice({
  name: "CartItems",
  initialState: initialItemState,
  reducers: {
    additem(state, action) {
      const newItem = action.payload;
      const exisitingitem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!exisitingitem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        exisitingitem.quantity++;
        exisitingitem.totalPrice = exisitingitem.totalPrice + newItem.price;
      }
    },

    removeitem(state, action) {
      const id = action.payload;
      const exisitingitem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (exisitingitem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisitingitem.quantity--;
        exisitingitem.totalPrice =
          exisitingitem.totalPrice - exisitingitem.price;
      }
    },
  },
});
export const itemAction = cartitemSlice.actions;

export default cartitemSlice;
