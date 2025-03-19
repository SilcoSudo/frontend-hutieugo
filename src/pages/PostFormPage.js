import React, { useState, useEffect } from 'react';
import api from '../services/api';

function PostFormPage() {
    const [nickname, setNickname] = useState('');
    const [content, setContent] = useState('');
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/posts', { nickname, content });
            setPosts([...posts, response.data]);
            setNickname('');
            setContent('');
            alert('Post created successfully!');
        } catch (error) {
            console.error('Error posting:', error);
            alert('Failed to create post. Please try again.');
        }
    };

    return (
        <div>
            <h1>Create a Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nickname:</label>
                    <input
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Post</button>
            </form>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.nickname}</strong>: {post.content} <br />
                        <small>{new Date(post.createdAt).toLocaleString()}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostFormPage;