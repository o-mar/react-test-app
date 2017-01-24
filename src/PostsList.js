import React from 'react';
import Post from './Post';

const PostsList = ({ posts, deletePost }) => (
    <div>
        {posts.map((post) =>
            <Post className="post"
                  post={post}
                  key={post.id}
                  deletePost={deletePost} />
        )}
    </div>
);

export default PostsList;