import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        // TODO - remove temp, use defaultValue
        this.state = {
            isEditing: false,
            tempPostText: ''
        };
    }

    editPost = (e) => {
        e.preventDefault();
        const { body } = this.props;
        this.setState({
            isEditing: true,
            tempPostText: body
        });
    }

    textChangeHandler = (e) => {
        this.setState({
            ...this.state,
            tempPostText: e.target.value
        });
    }

    savePost = (e) => {
        e.preventDefault();
        const { id, updatePostBody } = this.props;
        this.setState({
            ...this.state,
            isEditing: false,
        });

        updatePostBody(id, this.state.tempPostText);
    }

    deletePost = (e) => {
        e.preventDefault();
        const { id, deletePost } = this.props;
        deletePost(id);
    }

    render() {
        const { title, body } = this.props;
        const isEditing = this.state.isEditing;

        let postBody = body;
        if (isEditing) {
            postBody = <textarea value={this.state.tempPostText} onChange={this.textChangeHandler} />;
        }

        return (
            <div className="post">
                <h4 className="post-title">{title}</h4>
                <p className="post-body">{postBody}</p>
                <div className="post-сontrols">
                    <button onClick={isEditing ? this.savePost : this.editPost}>
                        {isEditing ? 'Save' : 'Edit'}
                    </button>
                    <button onClick={this.deletePost}>Delete</button>
                    <button>Show comments</button>
                </div>
            </div>
        );
    }
}

export default Post;