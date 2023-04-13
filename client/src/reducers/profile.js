import { CLEAR_PROFILE, CREATE_PROFILE, EDIT_PROFILE, GET_PROFILE, GET_PROFILES, GET_REPO, NO_REPO, PROFILE_ERR } from "../action/types";

const initialState = {
    profile: null,
    profiles: [],
    repo: [],
    loading: true,
    err: {}
}

const profileReducer = (state = initialState, action)=>{
    const {type, payload} = action
    switch (type) {
        case GET_PROFILE:
        case CREATE_PROFILE:
        case EDIT_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false
            }
        case PROFILE_ERR:
            return {
            ...state,
            err: payload,
            loading: false
        }
        case CLEAR_PROFILE:
            return {
            ...state,
            repo: [],
            profile: null,
            loading: false
        }
        case GET_REPO:
            return {
                ...state,
                repo: payload,
                loading: false
            }
        case NO_REPO:
            return {
                ...state,
                repo: [],
                loading: false,
                err: payload
            }
        default:
            return state
    }
}

export default profileReducer