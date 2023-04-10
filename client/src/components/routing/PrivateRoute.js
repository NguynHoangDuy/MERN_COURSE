import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
const PrivateRoute = (
  { component: Component },
  { auth: isAuthenticated, loading }
) => {
  if (isAuthenticated) return <Component />;

  return <Redirect to="/login" />;
};

PrivateRoute.prototype = {
  auth: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
