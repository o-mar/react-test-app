import React, { Component } from 'react';
import Comments from './Comments';
import './Post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {editMode: false};
    }

    editPost = (e) => {
        e.preventDefault();
        const { id, updatePostBody } = this.props;

        if (this.state.editMode) {
            updatePostBody(id, this.updatedText.value);
        }

        this.setState({editMode: !this.state.editMode});
    }

    deletePost = (e) => {
        e.preventDefault();
        const { id, deletePost } = this.props;
        deletePost(id);
    }

    render() {
        const { id, title, body } = this.props;
        const editMode = this.state.editMode;

        let postBody = body;
        if (editMode) {
            postBody = <textarea defaultValue={body} ref={txt => this.updatedText = txt} />;
        }

        return (
            <div className="post">
                <h4 className="post-title">{title}</h4>
                <p className="post-body">{postBody}</p>
                <div className="post-сontrols">
                    <button onClick={this.editPost}>
                        {editMode ? 'Save' : 'Edit'}
                    </button>
                    <button onClick={this.deletePost}>Delete</button>
                    <button>Show comments</button>
                </div>
                <Comments postId={id} />
            </div>
        );
    }
}

export default Post;