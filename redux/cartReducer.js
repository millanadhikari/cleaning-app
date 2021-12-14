import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    furnished: false,
    steam: [

    ],
    bookingDate: '',
    time: '',
    quantity: 0,
    total: 0,
    stripeData: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      // state.products += state.products.map(p => p.id !== action.payload.id) ? state.products.push(action.payload) : null
      // action.payload.id !== state.products?.map(p => p.id == action.payload.id) && state.products.push(action.payload)
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      state.products = state.products.filter(p => p.id !== action.payload.id)
      state.total -= action.payload.price * action.payload.quantity

    },
    addStripe: (state, action) => {
      state.stripeData.push(action.payload)
    },
    addFurnished: (state, action) => {
      state.furnished = action.payload
    },
    addSteam: (state, action) => {
      state.steam = action.payload
    },
    addBookingDate: (state, action) => {
      state.bookingDate = action.payload
    },
    addTime: (state, action) => {
      state.time = action.payload
    }
  }
})

export const {
  addProduct,
  removeProduct,
  addStripe,
  addFurnished,
  addSteam,
  addBookingDate,
  addTime } = cartSlice.actions;
export default cartSlice.reducer;