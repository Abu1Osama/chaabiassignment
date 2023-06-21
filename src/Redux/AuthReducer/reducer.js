import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionType";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
  name:""
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload,name: payload.name };
      case LOGOUT_SUCCESS:
        return { ...state, isAuth: false, token: "" };
    default:
      return state;
  }
};
