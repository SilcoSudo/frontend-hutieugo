import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Hủ Tiếu Gõ Blog</h1>
        <div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 mr-2">Đăng ký</button>
          <button className="px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500">Đăng nhập</button>
        </div>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-4 rounded-xl shadow-md border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-blue-800">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.content}</p>
            <div className="mt-4 flex space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">❤️ Thả tim</button>
              <button className="px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500">📝 Follow tác giả</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
