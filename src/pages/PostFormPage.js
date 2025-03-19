// src/pages/PostFormPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostFormPage() {
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname || !content) {
      alert('Please enter both nickname and content!');
      return;
    }

    axios.post('http://api.hutieugo.id.vn/api/posts', { nickname, content })
      .then(() => {
        setNickname('');
        setContent('');
        navigate('/'); // Quay về HomePage sau khi đăng
      })
      .catch(error => console.error('Error posting:', error));
  };

  return (
    <div>
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nickname: </label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Your nickname"
          />
        </div>
        <div>
          <label>Content: </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write anything..."
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostFormPage;