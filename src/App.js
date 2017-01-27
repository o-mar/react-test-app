import React, { Component } from 'react';
import Header from './Header';
import PostsList from './PostsList';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Header title="My Awesome Blog" />
                <PostsList className="posts-list" />
            </div>
        );
    }
}

export default App;
