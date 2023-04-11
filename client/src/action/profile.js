import axios from "axios"
import { CREATE_PROFILE, EDIT_PROFILE, GET_PROFILE, PROFILE_ERR } from "./types"
import { setAlert } from "./alert"
// import { setAlert } from "./alert"

export const getCurrentProfile = () => async (dispatch)=>{
    try {
        const res = await axios.get("http://localhost:5000/api/profile/me")
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERR,
            // payload: {msg: error.response.statusText, status: error.response.status}
        })

        
    }
}

export const createProfile = (profile, edit = false) => async (dispatch)=>{
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        const body = profile
        const res = await axios.post("http://localhost:5000/api/profile", body, config)
        if(!edit)
        dispatch({
            type: CREATE_PROFILE,
            payload: res.data
        })
        else {
            dispatch({
                type: EDIT_PROFILE,
                payload: res.data
            })
        }

        dispatch(setAlert(edit?"Profile updated":"Profile created"))
    } catch (error) {
        const errs = error.response.data.err
        errs.forEach(err => {
            dispatch(setAlert(err.msg, "danger"))
        });
    }
}