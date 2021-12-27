import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    furnished: false,
    steam: [

    ],
    addOns: [
      {
        select: false,
        id: "2139323",
        title: "Laundry",
        quantity: "1",
        price: 50,
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS",
      },
      {
        select: false,
        id: "2229323",
        title: "Blinds",
        quantity: "1",
        price: 50,
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS",
      },
      {
        select: false,
        id: "2222323",
        title: "Small balcony",
        quantity: "1",
        price: 25,
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS",
      },
      {
        select: false,
        id: "2222223",
        title: "Large Balcony",
        quantity: "1",
        price: 50,
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS",
      },
      {
        select: false,
        id: "2222222",
        title: "Separate toilet",
        quantity: "1",
        price: 50,
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS",

      },
      {
        select: false,
        id: "2222224",
        title: "Blind Cleaning",
        quantity: "1",
        price: 50,
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS",

      },
      {
        select: false,
        id: "2222672",
        title: "Fridge-inside and out",
        quantity: "1",
        price: 50,
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS",

      },
      {
        select: false,
        id: "454545",
        title: "Garage",
        quantity: "1",
        price: 50,
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS",

      }],
    bookingDate: '',
    time: '',
    quantity: 0,
    productsPrice:0,
    addonsPrice:0,
    total: 0,
    stripeData: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      // state.products += state.products.map(p => p.id !== action.payload.id) ? state.products.push(action.payload) : null
      // action.payload.id !== state.products?.map(p => p.id == action.payload.id) && state.products.push(action.payload)
      state.productsPrice += action.payload.price * action.payload.quantity
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
    },
    addAddons: (state, action) => {
      state.addOns = action.payload
      let start = action.payload.filter(obj => {
        return obj.select === true
      })

      let end = action.payload.filter(obj => {
        return obj.select === false
      })

   
      let newTotal = start.reduce((sum, item) => sum + item.price, 0)
      state.addonsPrice = newTotal 
      state.total = state.addonsPrice + state.productsPrice
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
  addTime,
  addAddons } = cartSlice.actions;
export default cartSlice.reducer;