import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getPostById } from "../../action/post";
import { Link, useParams } from "react-router-dom";
import PostCommentForm from "./PostCommentForm";
import PostComment from "./PostComment";
import Spinner from "../layout/Spinner";
const Post = ({ getPostById, post }) => {
    const id = useParams();
    useEffect(() => {
        getPostById(id.id);
    }, [getPostById, id.id]);
    return (
        <div className="container">
            {post ? (
                <Fragment>
                    <Link to="/post" className="btn">
                        Back To Posts
                    </Link>
                    <div className="post bg-white p-1 my-1">
                        <div>
                            <Link to={`/profile/${post.user}`}>
                                <img
                                    className="round-img"
                                    src={post.avatar}
                                    alt=""
                                />
                                <h4>{post.name}</h4>
                            </Link>
                        </div>
                        <div>
                            <p className="my-1">{post.text}</p>
                        </div>
                    </div>
                    <PostCommentForm postId={post._id} />
                    <PostComment
                        comments={post.comments}
                        userPost={post.user}
                        id={post._id}
                    />
                </Fragment>
            ) : (
                <Spinner />
            )}
        </div>
    );
};
const mapStateToProps = (state) => ({
    post: state.post.post,
});
export default connect(mapStateToProps, { getPostById })(Post);
