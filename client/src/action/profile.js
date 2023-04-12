import axios from "axios";
import {
  CREATE_PROFILE,
  EDIT_PROFILE,
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERR,
} from "./types";
import { setAlert } from "./alert";
// import { setAlert } from "./alert"

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERR,
      // payload: {msg: error.response.statusText, status: error.response.status}
    });
  }
};

export const createProfile =
  (profile, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = profile;
      const res = await axios.post(
        "http://localhost:5000/api/profile",
        body,
        config
      );
      if (!edit)
        dispatch({
          type: CREATE_PROFILE,
          payload: res.data,
        });
      else {
        dispatch({
          type: EDIT_PROFILE,
          payload: res.data,
        });
      }

      dispatch(
        setAlert(edit ? "Profile updated" : "Profile created", "success")
      );
    } catch (error) {
      const errs = error.response.data.err;
      errs.forEach((err) => {
        dispatch(setAlert(err.msg, "danger"));
      });
    }
  };

export const addEducation = (education) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put(
      "http://localhost:5000/api/profile/education",
      education,
      config
    );
    dispatch({
      type: EDIT_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert('Education Added', 'success'));
  } catch (error) {
    console.log(error);
  }
};
export const addExperience = (experience) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put(
      "http://localhost:5000/api/profile/experience",
      experience,
      config
    );
    dispatch({
      type: EDIT_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert('Experience Added', 'success'));
  } catch (error) {
    console.log(error);
  }
};

export const deleteEducation = (id) => async(dispatch) => {
  try {
  
    const res = await axios.delete(
      `http://localhost:5000/api/profile/education/${id}`
    );
    dispatch({
      type: EDIT_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert('Education deleted', 'success'));
  } catch (error) {
    console.log(error);
  }
}
export const deleteExperience = (id) => async(dispatch) => {
  try {
  
    const res = await axios.delete(
      `http://localhost:5000/api/profile/experience/${id}`
    );
    dispatch({
      type: EDIT_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert('Experience deleted', 'success'));
  } catch (error) {
    console.log(error);
  }
}

export const getAllProfiles = () => async(dispatch) =>{
  try {
    const res = await axios.get("http://localhost:5000/api/profile")

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const getProfileById = (id) => async(dispatch) => {
  try {
    
    const res = await axios.get(`http://localhost:5000/api/profile/user/${id.id}`)
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}