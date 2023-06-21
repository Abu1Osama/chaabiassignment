import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../actionType";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};

export const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload: { ...payload, name: payload.name } };
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

// export const signupUser = (userdata) => (dispatch) => {

//   dispatch(signupRequest());
//   return axios
//     .post("https://semi-mock2.onrender.com/users", userdata)
//     .then((res) => {

//     })
//     .catch((error) => {
//       dispatch(signupFailure());
//     });
// };

export const logoutUser = () => {
  return { type: LOGOUT_SUCCESS };
};

export const signupUser = (body, navigate) => (dispatch) => {
  if (body.password !== body.confirmpassword) {
    toast.error("Password and confirm password do not match.");
    return;
  } else {
  }

  dispatch(signupRequest());
  axios
    .post(`https://userauthentication-oqxf.onrender.com/users/register`, body)
    .then((res) => {
      dispatch(signupSuccess(res.data));
      console.log(res.data);
      toast.success("Account created successfully!", {
        style: {
          borderRadius: "50px",
          background: "#989898",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
      navigate("/login");
    })
    .catch((error) => {
      dispatch(signupFailure());
      if (error.response) {
        const errorMessage = error.response.data.msg;
        toast.error(
          errorMessage === "email already used"
            ? "Account already exists!"
            : errorMessage
        );
      } else if (error.request) {
        toast.error("No response received from the server.");
      }
    });
};

// ...

// export const loginUser = (body, navigate, location) => async (dispatch) => {
//   dispatch(loginRequest());

//   try {
//     const response = await axios.post(
//       'https://userauthentication-oqxf.onrender.com/users/login',
//       body
//     );
//     const data = response.data;
//     dispatch(loginSuccess(data));
//     toast.success('Logged in successfully!');
//     navigate(location.state === null ? '/' : location.state, {
//       replace: true,
//     });
//   } catch (error) {
//     console.log(error);
//     dispatch(loginFailure(error.message));
//     if (error.response && error.response.status === 400) {
//       toast.error('Incorrect email or password. Please try again.');
//     } else {
//       toast.error('Login failed. Please try again.');
//     }
//   }
// };
// ...

export const loginUser = (body, navigate, location) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post(
      "https://userauthentication-oqxf.onrender.com/users/login",
      body
    );
    const data = response.data;
    dispatch(loginSuccess(data));
    console.log(data.name)
    toast.success("Logged in successfully!");
    navigate(location.state === null ? "/" : location.state, {
      replace: true,
    });
  
  } catch (error) {
    console.log(error.response); // Log the error response to the console

 
    toast.error("👻"+error.response.data.msg, {
     
      style: {
        borderRadius: "50px",
        color: "black",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });
    dispatch(loginFailure(error.message));
  }
};

// ...

