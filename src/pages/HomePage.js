import React, { useState, useEffect } from 'react';
import api from '../services/api';
import '../styles/HomePage.css';

function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('/api/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="homepage">
            <h1>Welcome to Hutieugo</h1>
            <h2>Recent Posts</h2>
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                <ul className="post-list">
                    {posts.map((post) => (
                        <li key={post.id} className="post-item">
                            <strong>{post.nickname}</strong>: {post.content} <br />
                            <small className="post-date">{new Date(post.createdAt).toLocaleString()}</small>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default HomePage;