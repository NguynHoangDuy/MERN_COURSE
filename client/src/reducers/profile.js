import { CLEAR_PROFILE, CREATE_PROFILE, EDIT_PROFILE, GET_PROFILE, PROFILE_ERR } from "../action/types";

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
        default:
            return state
    }
}

export default profileReducer