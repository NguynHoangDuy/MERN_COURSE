import React, { Fragment, useEffect} from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../action/profile";
import PropTypes from "prop-types"
import Spinner from "../layout/Spinner"
import { Link } from "react-router-dom";
import DashboardAction from "./DashboardAction";
const Dashboard = ({getCurrentProfile, auth: {user}, profile: {profile, loading}}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  
  return loading && profile === null ? <Spinner/> : <Fragment>
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      
      <p className="lead"> Welcome {user && user.name}</p>

      {profile !== null ? 
      <Fragment>
        <DashboardAction></DashboardAction>
      </Fragment> : 
      <Fragment>
        <p>You have not set up a profile, please add some info</p>
        <Link to="/create-profile" className="btn btn-primary my-1">
          Create Profile
        </Link>
      </Fragment>}
    </section>
  </Fragment>


};
Dashboard.prototype = {
  getCurrentProfile: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);
