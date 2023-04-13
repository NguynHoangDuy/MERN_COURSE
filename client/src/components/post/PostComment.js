import React from "react";
import formatDate from "../../utils/formatDate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteComment } from "../../action/post";
const PostComment = ({ comments, userPost, auth, deleteComment, id }) => {
    return (
        <div className="comments">
            {comments.length > 0
                ? comments.map((item, key) => (
                      <div className="post bg-white p-1 my-1" key={key}>
                          <div>
                              <Link to={`/profile/${item.user}`}>
                                  <img
                                      className="round-img"
                                      src={item.avatar}
                                      alt=""
                                  />
                                  <h4>{item.name}</h4>
                              </Link>
                          </div>
                          <div>
                              <p className="my-1">{item.text}</p>
                              <p className="post-date">
                                  Posted on {formatDate(item.date)}
                              </p>
                              {userPost === auth || item.user === auth ? (
                                  <button
                                      type="button"
                                      class="btn btn-danger"
                                      onClick={() =>
                                          deleteComment(id, item._id)
                                      }
                                  >
                                      <i class="fas fa-times"></i>
                                  </button>
                              ) : (
                                  ""
                              )}
                          </div>
                      </div>
                  ))
                : ""}
        </div>
    );
};
const mapStateToProps = (state) => ({
    auth: state.auth.user._id,
});
export default connect(mapStateToProps, { deleteComment })(PostComment);
