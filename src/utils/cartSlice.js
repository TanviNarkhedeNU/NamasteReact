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
    removeItem: (state) => {
      state.items.pop();
    },
    clearItem: (state) => {
      state.items.length = 0;
      //RTK says either mutate the existing state or return new state
      //we can also do return { items: []}
      //doing this replaces whatever there was in initial state
    },
  },
});

export default cartSlice.reducer;
export const { addItems, removeItem, clearItem } = cartSlice.actions;
