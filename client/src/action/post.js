import axios from "axios";
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
} from "./types";

export const createPost = (post) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await axios.post(
            "http://localhost:5000/api/posts",
            post,
            config
        );
        dispatch({
            type: CREATE_POST,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: POST_ERR,
            payload: error,
        });
    }
};
export const getAllPosts = () => async (dispatch) => {
    try {
        const res = await axios.get("http://localhost:5000/api/posts");
        dispatch({
            type: GET_POSTS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: POST_ERR,
            payload: error,
        });
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
        dispatch({
            type: DELETE_POST,
            payload: id,
        });
    } catch (error) {
        console.log(error);
    }
};

export const getPostById = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        dispatch({
            type: GET_POST,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: POST_ERR,
            payload: error,
        });
    }
};

export const addComment = (text, id) => async (dispacth) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await axios.post(
            `http://localhost:5000/api/posts/comment/${id}`,
            text,
            config
        );
        dispacth({
            type: ADD_COMMENT,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteComment = (id, comment_id) => async (dispacth) => {
    try {
        await axios.delete(
            `http://localhost:5000/api/posts/comment/${id}/${comment_id}`
        );
        dispacth({
            type: DELETE_COMMENT,
            payload: comment_id,
        });
    } catch (error) {
        console.log(error);
    }
};

export const addLike = (id) => async (dispacth) => {
    try {
        const res = await axios.put(
            `http://localhost:5000/api/posts/like/${id}`
        );
        console.log(res.data);
        dispacth({
            type: ADD_LIKE,
            payload: { id, likes: res.data },
        });
    } catch (error) {
        console.log(error);
    }
};
export const unLike = (id) => async (dispacth) => {
    try {
        const res = await axios.put(
            `http://localhost:5000/api/posts/unlike/${id}`
        );
        console.log(res.data);
        dispacth({
            type: UN_LIKE,
            payload: { id, likes: res.data },
        });
    } catch (error) {
        console.log(error);
    }
};
