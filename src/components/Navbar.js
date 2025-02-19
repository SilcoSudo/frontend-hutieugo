import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Hủ Tiếu Gõ Blog</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Trang chủ</Link>
        <Link to="/profile" className="hover:underline">Hồ sơ</Link>
        <Link to="/post/new" className="hover:underline">Tạo bài viết</Link>
        <Link to="/register" className="px-4 py-2 bg-white text-blue-700 rounded-lg shadow hover:bg-gray-100">Đăng ký</Link>
        <Link to="/login" className="px-4 py-2 bg-gray-200 text-blue-700 rounded-lg shadow hover:bg-gray-300">Đăng nhập</Link>
      </div>
    </nav>
  );
}

export default Navbar;