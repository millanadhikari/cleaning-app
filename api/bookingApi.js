import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";
const bookingUrl = rootUrl + "booking";


export const createNewBooking = (frmData) => {
    console.log("from api", frmData);
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.post(bookingUrl, frmData, {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        });
  
        resolve(result.data);
      } catch (error) {
        console.log(error.message);
        reject(error);
      }
    });
  };