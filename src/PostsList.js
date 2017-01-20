import React, { Component } from 'react';
import Post from './Post';

class PostsList extends Component {
    render() {
        return (
            <div>
                <Post className="post" />
                <Post className="post" />
                <Post className="post" />
            </div>
        );
    }
}

export default PostsList;