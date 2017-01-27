import React, { Component } from 'react';
import Post from './Post';

class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentWillMount() {
        const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(POSTS_URL).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({posts : data.slice(0, 10)});
        }).catch((e) => {
            console.log(e);
        });
    }

    updatePostBody = (id, updatedText) => {
        this.setState({
            posts: this.state.posts.map(
                post =>
                    (post.id === id ? {...post, body: updatedText} : {...post})
            )
        });
    }

    deletePost = (id) => {
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
                          updatePostBody={this.updatePostBody}
                          deletePost={this.deletePost} />
                )}
            </div>
        );
    }
}

export default PostsList;