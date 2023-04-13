import {
    ADD_COMMENT,
    ADD_LIKE,
    CREATE_POST,
    DELETE_COMMENT,
    DELETE_POST,
    GET_POST,
    GET_POSTS,
    POST_ERR,
    UN_LIKE,
} from "../action/types";

const initial = {
    post: null,
    posts: [],
    loadding: true,
    err: {},
};

function postReducer(state = initial, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_POST:
            return {
                ...state,
                posts: [payload, ...state.posts],
                loadding: false,
            };
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loadding: false,
            };
        case ADD_COMMENT:
            return {
                ...state,
                post: { ...state.post, comments: payload },
                loadding: false,
            };
        case GET_POST:
            return {
                ...state,
                post: payload,
                loadding: false,
            };
        case POST_ERR:
            return {
                ...state,
                err: payload,
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post._id !== payload),
            };
        case DELETE_COMMENT:
            return {
                ...state,
                post: {
                    ...state.post,
                    comments: state.post.comments.filter(
                        (item) => item._id !== payload
                    ),
                },
            };
        case ADD_LIKE:
        case UN_LIKE:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post._id === payload.id
                        ? { ...post, likes: payload.likes }
                        : { ...post }
                ),
            };
        default:
            return state;
    }
}

export default postReducer;
