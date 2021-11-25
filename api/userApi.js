import axios from 'axios'

const rootUrl = "http://localhost:3001/v1/"
const loginUrl = rootUrl + "customer/login"
const userProfileUrl = rootUrl + "user";
const logoutUrl = rootUrl + "user/logout";
const newAccessJWT = rootUrl + "tokens";

 const userLogin = frmData => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(loginUrl, frmData);

            resolve(res.data)

            if(res.data.status === "success") {
                sessionStorage.setItem("accessJWT", res.data.accessJWT);    
                localStorage.setItem(
                    "weDoCleaning",
                    JSON.stringify({refreshJWT: res.data.refreshJWT})
                )
            }

        } catch(error) {
           
            reject(error)

        }
    })
}

const fetchUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const accessJWT = sessionStorage.getItem("accessJWT");
  
        if (!accessJWT) {
          reject("Token not found!");
        }
  
        const res = await axios.get(userProfileUrl, {
          headers: {
            Authorization: accessJWT,
          },
        });
  
        resolve(res.data);
      } catch (error) {
        console.log(error);
        reject(error.message);
      }
    });
  };
  
  export const fetchNewAccessJWT = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { refreshJWT } = JSON.parse(localStorage.getItem("medicalApp"));
  
        if (!refreshJWT) {
          reject("Token not found!");
        }
  
        const res = await axios.get(newAccessJWT, {
          headers: {
            Authorization: refreshJWT,
          },
        });
  
        if (res.data.status === "success") {
          sessionStorage.setItem("accessJWT", res.data.accessJWT);
        }
  
        resolve(true);
      } catch (error) {
        if (error.message === "Request failed with status code 403") {
          console.log(error)
          localStorage.removeItem("medicalApp");
        }
  
        reject(false);
      }
    });
  };

const userLogout = async () => {
          try {
            await axios.delete(logoutUrl, {
              headers: { 
                Authorization: sessionStorage.getItem("accessJWT"),
              }
            })
          
      } catch (error) {
        console.log(error)
      }
  }


  export {userLogin, fetchUser, userLogout}