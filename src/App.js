import React, { Component } from 'react';
import PostsList from './PostsList';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <h2>My Awesome Blog</h2>
                <PostsList className="posts-list" />
            </div>
        );
    }
}

export default App;
