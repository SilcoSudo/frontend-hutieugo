import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostPage() {
  const { postId } = useParams();
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
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        {post ? (
          <>
            <h1 className="text-2xl font-bold text-blue-700">{post.title}</h1>
            <p className="text-gray-700 mt-2">{post.content}</p>
            <div className="mt-4 flex space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">❤️ Thả tim</button>
              <button className="px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500">💬 Bình luận</button>
              <button className="px-4 py-2 bg-gray-300 text-black rounded-lg shadow hover:bg-gray-400">📝 Follow tác giả</button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">Đang tải bài viết...</p>
        )}
      </div>
    </div>
  );
}

export default PostPage;