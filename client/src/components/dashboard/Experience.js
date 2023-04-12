import React, { Fragment } from "react";

import { connect } from "react-redux";
import formatDate from "../../utils/formatDate";
import { deleteExperience } from "../../action/profile";

const Experience = ({ experience }) => {
  const experienceArr = experience.map((exe)=>(
    <tr key={exe._id}>
      <td>{exe.company}</td>
      <td className="hide-sm">{exe.title}</td>
      <td>
        {formatDate(exe.from)} - {!exe.current ? formatDate(exe.to) : 'Now'}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(exe._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 class="my-2">Experience Credentials</h2>
      {experience.length === 0 ? (
        <Fragment>
          <p>Not have Experience Credentials</p>
        </Fragment>
      ) : (
        <Fragment>
        <table class="table">
          <thead>
            <tr>
            <th>Company</th>
            <th class="hide-sm">Title</th>
            <th class="hide-sm">Years</th>
            <th></th>
            </tr>
          </thead>
          <tbody>
            {experienceArr}
          </tbody>
        </table>
        </Fragment>
      )}
    </Fragment>
  );
};


const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps)(Experience);
