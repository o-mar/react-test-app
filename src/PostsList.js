import React, { Component } from 'react';
import Post from './Post';

class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state = {'posts': this.props.posts};
    }

    updatePostBody(id, updatedText) {
        this.setState({
            posts: this.state.posts.map(
                post => (post.id === id ? {...post, body: updatedText} : {...post})
            )
        });
    }

    deletePost(id) {
        this.setState({
            posts: this.state.posts.filter((post) => post.id !== id)
        });
    }

    render() {
        return (
            <div>
                {this.state.posts.map((post) =>
                    <Post className="post"
                          key={post.id}
                          {...post}
                          updatePostBody={this.updatePostBody.bind(this)}
                          deletePost={this.deletePost.bind(this)} />
                )}
            </div>
        );
    }
}

export default PostsList;