import React, { useState } from 'react';
import api from '../services/api';
import '../styles/styles.css';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', { username, password });
            localStorage.setItem('token', response.data.token); // Lưu token vào localStorage
            window.location.href = '/'; // Chuyển hướng về trang chủ
        } catch (err) {
            setError('Invalid credentials');
            console.error('Login error:', err.response || err);
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;