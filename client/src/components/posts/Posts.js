import React, { useEffect } from "react";
import PostCreate from "./PostCreate";
import PostItem from "./PostItem";
import { connect } from "react-redux";
import { getAllPosts } from "../../action/post";

const Posts = ({ posts, getAllPosts }) => {
    useEffect(() => {
        getAllPosts();
    }, [getAllPosts]);
    return (
        <section className="container">
            <h1 class="large text-primary">Posts</h1>
            <p class="lead">
                <i class="fas fa-user"></i> Welcome to the community!
            </p>

            <PostCreate />

            {posts.length > 0 ? (
                <div className="posts">
                    {posts.map((item) => (
                        <PostItem key={item._id} post={item} />
                    ))}
                </div>
            ) : (
                <div>Not have post</div>
            )}
        </section>
    );
};
const mapStateToProps = (state) => ({
    posts: state.post.posts,
});
export default connect(mapStateToProps, { getAllPosts })(Posts);
