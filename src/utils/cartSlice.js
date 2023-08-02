import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // modify cart using reducer functions
  reducers: {
    // these reducers function called on the dispatch of a action
    addItem: (state, action) => {
      // addItem = action, () => reducer function
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// export actions and reducers from this slice
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
