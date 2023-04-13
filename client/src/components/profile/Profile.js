import React, { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProfileById } from "../../action/profile";
import { connect } from "react-redux";
import ProfileGithub from "./ProfileGithub";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import Spinner from "../layout/Spinner";
const Profile = ({ getProfileById, profile }) => {
    const id = useParams();
    useEffect(() => {
        getProfileById(id);
    }, [getProfileById, id]);
    return (
        <section className="container">
            {profile ? (
                <Fragment>
                    <Link to="/profiles" className="btn btn-light">
                        Back To Profiles
                    </Link>
                    <div className="profile-grid my-1">
                        {/* <!-- Top --> */}
                        <ProfileTop profile={profile} />
                        {/* <!-- About --> */}
                        <ProfileAbout profile={profile} />

                        {/* <!-- Experience --> */}
                        <ProfileExperience experience={profile.experience} />
                        {/* <!-- Education --> */}
                        <ProfileEducation education={profile.education} />

                        {/* <!-- Github --> */}
                        <ProfileGithub gitUser={profile.githubusername} />
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <Spinner />
                </Fragment>
            )}
        </section>
    );
};
const mapStateToProps = (state) => ({
    profile: state.profile.profile,
});
export default connect(mapStateToProps, { getProfileById })(Profile);
