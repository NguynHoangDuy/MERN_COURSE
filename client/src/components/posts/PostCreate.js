import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../action/post';

const PostCreate = ({createPost}) => {

    const [text, setText] = useState("")
    
    const onchange = (e)=>{
        setText(
            e.target.value
        )
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        createPost({text})
        setText("")
    }
    return (
        <div className="post-form">
            <div className="bg-primary p">
            <h3>Say Something...</h3>
            </div>
            <form className="form my-1" onSubmit={(e) => onSubmit(e)}>
            <textarea
                name="text"
                cols="30"
                rows="5"
                value={text}
                placeholder="Create a post"
                onChange={(e) => onchange(e)}
                required
            ></textarea>
            <input type="submit" className="btn btn-dark my-1" value="Submit" />
            </form>
        </div>
    );
};

export default connect(null, {createPost})(PostCreate);