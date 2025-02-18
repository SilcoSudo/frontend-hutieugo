import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostPage() {
  const { postId } = useParams(); // Lấy id bài viết từ URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post', error);
      }
    };
    fetchPost();
  }, [postId]);

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <div>
            <button>❤️ Thả tim</button>
            <button>💬 Bình luận</button>
            <button>📝 Follow tác giả</button>
          </div>
        </>
      ) : (
        <p>Đang tải bài viết...</p>
      )}
    </div>
  );
}

export default PostPage;
