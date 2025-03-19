import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostFormPage from './pages/PostFormPage';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/post">Create Post</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                        <li><a href="/profile">Profile</a></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/post" element={<PostFormPage />} />
                    {/* Thêm các route khác nếu cần */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;