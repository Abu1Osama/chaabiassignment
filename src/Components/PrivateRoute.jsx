import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const location = useLocation();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace={true} />;
  }

  return children;
}

export default PrivateRoute;
