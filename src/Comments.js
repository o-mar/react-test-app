import React, { Component } from 'react';
import './Comments.css';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: []};
    }

    componentWillMount() {
        const { postId } = this.props;
        const COMMENTS_URL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
        fetch(COMMENTS_URL).then((response) => {
            return response.json();
        }).then((data) => {
            // TODO - rebuild problem with \n
            const cleanData = data.map(
                comment => ({...comment, body: comment.body.replace(/(\r\n|\n|\r)/gm,"")})
            );
            this.setState({comments : cleanData.slice(0, 10)});
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
        const comments = this.state.comments;

        return (
            <div className="comments-block">
                {comments.map(
                    comment => <div key={comment.id}>{comment.body}, <span>{comment.email}</span></div>
                )}
            </div>
        );
    }
}

export default Comments;
