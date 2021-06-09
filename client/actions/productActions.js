import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProducts = (pro) => (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: pro });
    localStorage.setItem("products", JSON.stringify(pro));
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: "Error",
    });
  }
};
