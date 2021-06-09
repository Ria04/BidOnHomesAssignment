import {
  ADD_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
} from "../constants/userConstants";

export const userListReducers = (state = { users: [] }, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return { users: [] };
    case ADD_USER_SUCCESS:
      console.log(action.payload);
      return {
        users: action.payload,
      };
    case ADD_USER_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
