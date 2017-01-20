import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <h4>Post title</h4>
                <p>Post text</p>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>Show comments</button>
                </div>
            </div>
        );
    }
}

export default Post;