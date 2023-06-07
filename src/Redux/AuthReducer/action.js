import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../actionType";
import { useNavigate } from "react-router-dom";
export const loginRequest = () => {

  return { type: LOGIN_REQUEST };
};

export const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

export const loginFailure = () => {
  return { type: LOGIN_FAILURE };
};

export const signupRequest = () => {
  return { type: SIGNUP_REQUEST };
};

export const signupSuccess = (payload) => {
  return { type: SIGNUP_SUCCESS, payload };
};

export const signupFailure = () => {
  return { type: SIGNUP_FAILURE };
};




export const signupUser = (userdata) => (dispatch) => {
 
  dispatch(signupRequest());
  return axios
    .post("https://semi-mock2.onrender.com/users", userdata)
    .then((res) => {

    })
    .catch((error) => {
      dispatch(signupFailure());
    });
};

export const logoutUser = () => {
  return { type: LOGOUT_SUCCESS };
};
