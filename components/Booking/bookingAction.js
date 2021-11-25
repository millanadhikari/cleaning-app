import {
  openNewBookingPending,
  openNewBookingSuccess,
  openNewBookingFail,
} from "./bookingSlicer";


import { createNewBooking } from "../../api/bookingApi";

export const openNewBooking = (frmData) => (dispatch) => {
  console.log(frmData)
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(openNewBookingPending());

      ////call api
      const result = await createNewBooking(frmData);
      if (result.status === "error") {
        return dispatch(openNewBookingFail(result.message));
      }
      dispatch(openNewBookingSuccess(result.message));
    } catch (error) {
      console.log(error);
      dispatch(openNewBookingFail(error.message));
    }
  });
};