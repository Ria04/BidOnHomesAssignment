import {
  ADD_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
} from "../constants/userConstants";

export const addUser = (user) => (dispatch) => {
  try {
    dispatch({ type: ADD_USER_REQUEST });
    dispatch({ type: ADD_USER_SUCCESS, payload: user });
    console.log(user);
    localStorage.setItem("users", JSON.stringify(user));
  } catch (error) {
    dispatch({
      type: ADD_USER_FAIL,
      payload: "Error",
    });
  }
};
