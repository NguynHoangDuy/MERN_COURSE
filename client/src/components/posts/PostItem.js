import React from "react";
import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import { connect } from "react-redux";
import { deletePost, addLike, unLike } from "../../action/post";

const PostItem = ({ post, deletePost, userId, addLike, unLike }) => {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <Link to={`/profile/${post.user}`}>
                    <img className="round-img" src={post.avatar} alt="" />
                    <h4>{post.name}</h4>
                </Link>
            </div>
            <div>
                <p className="my-1">{post.text}</p>
                <p className="post-date">Posted on {formatDate(post.date)}</p>
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => addLike(post._id)}
                >
                    <i className="fas fa-thumbs-up"></i>
                    {post.likes.length > 0 ? (
                        <span>{post.likes.length}</span>
                    ) : (
                        ""
                    )}
                </button>
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => unLike(post._id)}
                >
                    <i className="fas fa-thumbs-down"></i>
                </button>
                <Link to={`/post/${post._id}`} className="btn btn-primary">
                    Discussion{" "}
                    {post.comments.length > 0 ? (
                        <span className="comment-count">
                            {post.comments.length}
                        </span>
                    ) : (
                        ""
                    )}
                </Link>
                {post.user === userId ? (
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deletePost(post._id)}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    userId: state.auth.user._id,
});
export default connect(mapStateToProps, { deletePost, addLike, unLike })(
    PostItem
);
