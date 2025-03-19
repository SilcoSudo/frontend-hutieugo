// src/pages/PostPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://api.hutieugo.id.vn/api/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>Post Details</h1>
      <p><strong>Nickname:</strong> {post.nickname}</p>
      <p><strong>Content:</strong> {post.content}</p>
    </div>
  );
}

export default PostPage;