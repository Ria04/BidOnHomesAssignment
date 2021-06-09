import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const productListReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { products: [] };
    case PRODUCT_LIST_SUCCESS:
      console.log(action.payload);
      return {
        products: action.payload,
      };
    case PRODUCT_LIST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
