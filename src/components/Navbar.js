import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
function Navbar() {
  return (
    <nav className="bg-blue-700 p-4 text-white flex justify-between items-center shadow-lg sticky top-0 z-50">
      <h1 className="text-2xl font-bold uppercase tracking-wide">Hủ Tiếu Gõ Blog</h1>
      <div className="nav-links flex space-x-6 text-lg">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
        <Link to="/post/new" className="hover:underline">New Post</Link>
      </div>
      <div className="auth-buttons flex space-x-4">
        <Link to="/register" className="px-4 py-2 bg-white text-blue-700 rounded-lg shadow hover:bg-gray-100">Sign Up</Link>
        <Link to="/login" className="px-4 py-2 bg-gray-200 text-blue-700 rounded-lg shadow hover:bg-gray-300">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
