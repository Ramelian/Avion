import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
      
    },
    incrementQuantity: (state, action) => {
      const id  = action.payload;
      const item = state.find((item) => item._id === id);
      if (item && item.quantity <= 10 ) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.find((item) => item._id === id);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addItem, deleteItem, incrementQuantity, decrementQuantity } =
  basketSlice.actions;
export const basketReducer = basketSlice.reducer;
