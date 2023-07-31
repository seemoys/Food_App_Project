import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});
export default cartSlice.reducer;
export const { addItems, removeItems, clearItems } = cartSlice.actions;
