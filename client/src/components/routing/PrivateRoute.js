import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Spinner from "../layout/Spinner";

const PrivateRoute = ({
    component: Component,
    auth: { isAuthenticated, loading },
}) => {
    if (isAuthenticated === null) return <Spinner />;
    if (isAuthenticated) return <Component />;
    return <Navigate to="/login" />;
};

PrivateRoute.prototype = {
    auth: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
