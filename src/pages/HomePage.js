// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://api.hutieugo.id.vn/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1>Public Posts</h1>
      <Link to="/post">Create a new post</Link>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.nickname}</strong>: 
            <Link to={`/post/${post.id}`}>{post.content.substring(0, 50)}...</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;