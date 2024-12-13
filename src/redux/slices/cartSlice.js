// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     item: [],
//     // add more here if need
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//     reducers: {
//         addToCart: (state, action) => {

//         }
//   },
// });

// export default cartSlice.reducer







import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array to hold cart items
  totalQuantity: 0, // Total number of items in the cart
  totalPrice: 0, // Total price of items in the cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload; // { id, name, color, size, quantity, price }
      const existingItem = state.items?.find(
        (item) =>
          item.id === newItem.id &&
          item.color === newItem.color &&
          item.size === newItem.size
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      } else {
        state.items?.push({
          ...newItem,
          totalPrice: newItem.price * newItem.quantity,
        });
      }

      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;
    },

    removeFromCart: (state, action) => {
      const { id, color, size } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id && item.color === color && item.size === size
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.items.splice(existingItemIndex, 1);
      }
    },

    updateQuantity: (state, action) => {
      const { id, color, size, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.color === color && item.size === size
      );

      if (existingItem) {
        state.totalQuantity += quantity - existingItem.quantity;
        state.totalPrice +=
          (quantity - existingItem.quantity) * existingItem.price;
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.price * quantity;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;