import React, { useState } from "react";
import { connect } from "react-redux";
import { addComment } from "../../action/post";
const PostCommentForm = ({ addComment, postId }) => {
    const [text, setText] = useState("");
    return (
        <div className="post-form">
            <div className="bg-primary p">
                <h3>Leave A Comment</h3>
            </div>
            <form
                className="form my-1"
                onSubmit={(e) => {
                    e.preventDefault();
                    addComment({ text }, postId);
                    setText("");
                }}
            >
                <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    placeholder="Comment on this post"
                    required
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                ></textarea>
                <input
                    type="submit"
                    className="btn btn-dark my-1"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default connect(null, { addComment })(PostCommentForm);
