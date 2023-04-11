import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
const PrivateRoute = (
  { component: Component ,
   auth: { isAuthenticated, loading }}
) => {
  if (isAuthenticated) return <Component/>;
  else return <Navigate to="/login"/>
};

PrivateRoute.prototype = {
  auth: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
