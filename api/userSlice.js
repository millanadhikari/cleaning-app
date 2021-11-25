import { loginPending, loginSuccess, loginFailure } from "../redux/loginReducer";
import { fetchUser } from "./userApi";

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(loginPending());

    const result = await fetchUser();

    if (result.user && result.user._id)
      return dispatch(loginSuccess(result.user));

    dispatch(loginFailure("User is not found"));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};