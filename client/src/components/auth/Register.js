import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../action/alert";
import PropTypes from "prop-types";
const Register = ({ setAlert }) => {
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePass: "",
  });

  const { name, email, password, rePass } = formData;

  const onChange = (e) =>
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== rePass) {
      setAlert("Sai mật khẩu rồi", "danger");
      console.log("Sai mật khẩu rồi");
    } else {
      const newuser = {
        name,
        email,
        password,
      };
      try {
        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };
        const body = newuser;
        const res = await axios.post(
          "http://localhost:5000/api/users",
          body,
          config
        );
        console.log(res.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="rePass"
            minLength="6"
            value={rePass}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};
Register.prototype = {
  setAlert: PropTypes.func.isRequired,
};
export default connect(null, { setAlert })(Register);
