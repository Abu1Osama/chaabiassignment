import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionType";

const initialState = {
  isAuth: false,
  email: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, email: payload };
      case LOGOUT_SUCCESS:
        return { ...state, isAuth: false, email: "" };
    default:
      return state;
  }
};
