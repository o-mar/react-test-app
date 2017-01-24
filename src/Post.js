import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);
    }

    deletePost(e) {
        e.preventDefault();
        this.props.deletePost(this.props.post.id);
    }

    render() {
        return (
            <div>
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="post-сontrols">
                    <button>Edit</button>
                    <button onClick={this.deletePost}>Delete</button>
                    <button>Show comments</button>
                </div>
            </div>
        );
    }
}

export default Post;