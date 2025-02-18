import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProfilePage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        setUser(storedUser);
        try {
          const response = await axios.get(`http://localhost:8080/users/${storedUser.id}/posts`);
          setPosts(response.data);
        } catch (error) {
          console.error('Error fetching posts', error);
        }
      } else {
        navigate('/login');
      }
    };
    fetchUserProfile();
  }, [navigate]);

  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <h3>Bài viết của bạn:</h3>
          {posts.length === 0 ? (
            <p>Bạn chưa đăng bài viết nào.</p>
          ) : (
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <h4>{post.title}</h4>
                  <p>{post.content}</p>
                  <button>📝 Sửa bài</button>
                  <button>❌ Xóa bài</button>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <p>Đang tải thông tin...</p>
      )}
    </div>
  );
}

export default ProfilePage;
