import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  successMsg: "",
};
const newBookingSlice = createSlice({
  name: "newBooking",
  initialState,
  reducers: {
    openNewBookingPending: (state) => {
      state.isLoading = true;
    },
    openNewBookingSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.successMsg = payload;
    },
    openNewBookingFail: (state, { payload }) => {
      state.isLoading = true;
      state.error = payload;
    },
    restSuccessMSg: (state) => {
      state.isLoading = true;
      state.successMsg = "";
    },
  },
});

export const {
  openNewBookingPending,
  openNewBookingSuccess,
  openNewBookingFail,
  restSuccessMSg,
} = newBookingSlice.actions;
export default newBookingSlice.reducer;