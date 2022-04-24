import { GET_DETAIL_CAR } from "../type";

export const saveDetailByID = (action) => {
  return (dispatch) => {
    dispatch({
      type: `${GET_DETAIL_CAR}_FULFILLED`,
      payload: action,
    });
  };
};